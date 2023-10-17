import React, { memo, useEffect, useLayoutEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import useProductStore from './../store/product-store';
import useProductDetailStore from './../store/productDetail-store';
import useBasketStore from '../store/basket-store';
import useUserStore from '../store/user-store';

import { ProductDetailContainer } from '../styled/ProductStyles';

import { AiOutlineHeart } from 'react-icons/ai';
import useOrderStore from '../store/order_store';

const ProductDetail = memo(() => {
  const navigate = useNavigate()
  const { productID } = useParams();
  const { loginState, userData } = useUserStore(state => state);
  const { productData } = useProductStore(state => state)
  const { productOptionData, productSetData, productDetailImageData } = useProductDetailStore(state => state)
  const { handleOrder } = useOrderStore(state => state)
  const { handleAddBasket } = useBasketStore(state => state)
  const { fetchData } = useProductDetailStore(state => state);
  const parseId = parseInt(productID, 10)
  const [data, setData] = useState(productData[parseId - 1]);
  const [optionBox, setOptionBox] = useState(productOptionData[parseId - 1] || {});
  const [setBox, setSetBox] = useState(productOptionData || {});
  const [detailImage, setDetailImage] = useState([])
  const [filteredSetBox, setFilteredSetBox] = useState([]);
  const [selectedOption, setSelectedOption] = useState("*");
  const [toggleInfo, setToggleInfo] = useState(1); // product_info 버튼 toggle
  const [selectedItems, setSelectedItems] = useState([]); // 선택된 아이템
  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    fetchData()
  }, []);

  useEffect(() => {
    if (productOptionData[parseId - 1]) {
      setOptionBox(productOptionData[parseId - 1]);
      setSetBox(productSetData.filter(item => item.productCode == optionBox.productCode));
      setDetailImage(productDetailImageData[parseId - 1])
    }
  }, [productOptionData, optionBox, productSetData, parseId]);

  useEffect(() => {
    setFilteredSetBox(setBox.filter(item => item.productSelect === selectedOption))
  }, [productData, optionBox, setBox, selectedOption]);

  const handleToggleInfo = (num) => {
    setToggleInfo(num)
  }

  const handleSelectItem = (e) => {
    const selectedId = e.target.value;
    const filteredSelectedItem = filteredSetBox.find(item => item.id === Number(selectedId))
    const isDuplicate = selectedItems.some(item => item.id === filteredSelectedItem.id); // 중복 확인
    if (filteredSelectedItem && !isDuplicate) {
      const { salePrice, desc, fragranceInfo, ...restData } = data; // salePrice, desc, fragranceInfo를 제외한 나머지 데이터 추출
      const itemWithAmount = {
        ...filteredSelectedItem,
        ...restData,
        amount: 1,
        id: selectedId,
        price: filteredSelectedItem.price,
        checked: false
      };
      setSelectedItems([...selectedItems, itemWithAmount]);
    } else {
      alert("이미 추가된 항목입니다");
    }
  };


  const handleIncreaseAmount = (index) => {
    const updatedItems = [...selectedItems];
    const updatedAmount = updatedItems[index].amount + 1;
    updatedItems[index].amount = updatedAmount;
    setSelectedItems(updatedItems);
  };

  const handleDecreaseAmount = (index) => {
    const updatedItems = [...selectedItems];
    const currentAmount = updatedItems[index].amount;
    if (currentAmount > 1) {
      const updatedAmount = currentAmount - 1;
      updatedItems[index].amount = updatedAmount;
      setSelectedItems(updatedItems);
    }
  };
  const totalPrice = selectedItems.reduce((accumulator, item) => {
    return accumulator + item.price * item.amount;
  }, 0);
  const totalAmount = selectedItems.reduce((accumulator, item) => {
    return accumulator + item.amount;
  }, 0);
  // console.log(data);
  // console.log(optionBox);
  // console.log(setBox);
  // console.log(selectedItems);
  // console.log(basketData);
  const { productName, price, salePrice, fragranceInfo, desc, titleImage } = data
  return (
    <ProductDetailContainer>
      <div className='inner'>
        <div className='product_itemBox'>
          <div className='product_imgBox'>
            <img src={titleImage} alt="" />
          </div>
          <div className='product_descBox'>
            <p><strong>{productName}</strong></p>
            <p className='product_price'>
              <span className='style-line-through'>{price.toLocaleString()}원</span>
              <strong> {salePrice.toLocaleString()}원</strong>
            </p>
            <p className='benefits_info'>
              <table>
                <tbody>
                  <tr>
                    <th>카드혜택</th>
                    <td>무이자혜택</td>
                  </tr>
                  <tr>
                    <th>멤버십혜택</th>
                    <td>등급별혜택보기</td>
                  </tr>
                  <tr>
                    <th>배송비</th>
                    <td>
                      3,000원 (50,000원 이상 구매 시 무료)
                    </td>
                  </tr>
                  <tr>
                    <th>배송예상</th>
                    <td>오늘출발가능</td>
                  </tr>
                </tbody>
              </table>
            </p>
            <p className='fragranceNote'>
              <table>
                <tbody>
                  <tr>
                    <th>TOP</th>
                    <td>자몽 | 베르가못 | 만다린</td>
                  </tr>
                  <tr>
                    <th>MID</th>
                    <td>진저 | 네롤리</td>
                  </tr>
                  <tr>
                    <th>BASE</th>
                    <td>샌달우드 | 패출리 | 코튼 머스크</td>
                  </tr>
                </tbody>
              </table>
            </p>
            <p className='fragranceInfo'>{fragranceInfo}</p>
            <ul className='desc'>
              {
                desc.split('\n').map((item, index) => {
                  return <li key={index} >{item}</li>
                })
              }
            </ul>
            <div className='product_optBox'>
              <div className='select_option'>
                <label>옵션선택</label>
                <select
                  name=""
                  id=""
                  onChange={(e) => setSelectedOption(e.target.value)}
                  value={selectedOption}
                >
                  <option value="*">- [필수] 옵션을 선택해 주세요 -</option>
                  <option value="*">-------------------------------------</option>
                  {
                    Object.keys(optionBox).map((key, index) => {
                      if (key !== "id" && key !== "productCode" && key !== "productName" && optionBox[key]) {
                        return (
                          <option key={index} value={optionBox[key]}>
                            {optionBox[key]}
                          </option>
                        );
                      }
                      return null;
                    })
                  }
                </select>
              </div>
              <div className='select_set'>
                <label>세트선택</label>
                <select
                  name=""
                  id=""
                  onChange={(e) => handleSelectItem(e)}
                >
                  <option value="*">- [필수] 옵션을 선택해 주세요 -</option>
                  <option value="*">-------------------------------------</option>
                  {
                    filteredSetBox.map(item => {
                      return (
                        <option
                          key={item.id}
                          value={item.id}
                        >
                          {item.productOption}
                        </option>
                      )
                    })
                  }
                </select>
              </div>
              {
                selectedItems.length > 0 && <div className='selected_itemBox'>
                  {
                    selectedItems.map((item, index) => {
                      const { productName, productOption, productSelect, amount } = item;
                      return (
                        <div className='selected_item' key={index}>
                          <ul>
                            <li><strong>{productName}</strong></li>
                            <li><span>{productSelect}/{productOption}</span></li>
                          </ul>
                          <div className='item_amount_count'>
                            <input type="text" value={amount} readOnly />
                            <div className='btn_wrap'>
                              <button
                                onClick={() => handleIncreaseAmount(index)}
                                readOnly
                              >
                                <img src="../public/images/btn_count_up.gif" alt="increase" />
                              </button>
                              <button
                                onClick={() => handleDecreaseAmount(index)}
                                readOnly
                              >
                                <img src="../public/images/btn_count_down.gif" alt="decrease" />
                              </button>
                            </div>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              }
              {
                selectedItems.length > 0 &&
                <div className='total_priceBox'>
                  <strong>{totalPrice.toLocaleString()}원</strong>
                  <span>({totalAmount}개)</span>
                </div>
              }
              <div className='btn_Wrap'>
                <button>
                  <i><AiOutlineHeart /></i>
                  {/* <AiFillHeart /> */}
                </button>
                <button
                  onClick={() => {
                    if (selectedItems.length === 0) {
                      alert('상품을 선택해주세요');
                      return;
                    }
                    else {
                      selectedItems.forEach(item => handleAddBasket(item, loginState, navigate))
                    }
                  }

                  }>
                  장바구니에 담기
                </button>
                <button
                  onClick={() => handleOrder(selectedItems, userData)}
                >
                  구매하기
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='product_infoBox'>
          <div className="btn_wrap">
            <button
              className={toggleInfo === 1 ? "on" : ""}
              onClick={() => handleToggleInfo(1)}>
              상품정보
            </button>
            <button
              className={toggleInfo === 2 ? "on" : ""}
              onClick={() => handleToggleInfo(2)}>
              구매후기
            </button>
          </div>
          {
            toggleInfo === 1 &&
            Object.keys(detailImage).map((key, index) => {
              return (
                <img src={detailImage[key]} alt="" key={index} />
              );
            })
          }

        </div>
      </div>
    </ProductDetailContainer >
  );
});

export default ProductDetail;