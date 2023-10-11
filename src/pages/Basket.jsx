import React, { memo, useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import useUserStore from '../store/user-store';
import useBasketStore from '../store/basket-store';
import useOrderStore from '../store/order_store';

import { BasketContainer, BasketLeftContainer, BasketRightContainer } from './../styled/BasketStyles';

import { AiOutlineClose } from 'react-icons/ai';

const Basket = memo(() => {
  const { loginState } = useUserStore(state => state);
  const { basketData } = useBasketStore(state => state);
  const { updateBasketData } = useBasketStore(state => state);
  // const { orderData } = useOrderStore(state => state);
  const [sum, setSum] = useState(0);
  const [deliveryFee, setDeliveryFee] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [checkBoxSelectAll, setCheckBoxSelectAll] = useState(false);
  const [checkedBasketData, setCheckBoxCheckBox] = useState([]);
  const navigate = useNavigate()
  // const [orderData, setOrderData] = useState([]);
  useEffect(() => {
    if (!loginState) {
      alert('로그인이 필요한 서비스입니다.');
      navigate('/login');
    }
  }, [])

  useEffect(() => {
    const updatedBasketData = basketData.filter(item => item.checked === true);
    setCheckBoxCheckBox(updatedBasketData)
  }, [basketData])

  useEffect(() => {
    setSum(checkedBasketData.reduce((acc, item) => acc + item.price * item.amount, 0))
  }, [basketData, checkedBasketData])

  useEffect(() => {
    if (sum > 49999 || sum === 0) setDeliveryFee(0)
    else setDeliveryFee(3000)
  }, [sum])

  useEffect(() => {
    setTotalCost(sum + deliveryFee)
  }, [sum, deliveryFee])

  //전체 체크박스
  const handleSelectAllChange = () => {
    setCheckBoxSelectAll(!checkBoxSelectAll);
    const updatedBasketData = basketData.map(item => ({
      ...item,
      checked: !checkBoxSelectAll,
    }));
    updateBasketData(updatedBasketData);
  };

  //개별 체크박스 체크&해제
  const handleChangeCheckbox = (item) => {
    const updatedBasketData = basketData.map((basketItem) => {
      if (basketItem.id === item.id) {
        return {
          ...basketItem,
          checked: !basketItem.checked,
        };
      }
      return basketItem;
    });
    updateBasketData(updatedBasketData);
  }

  const handleIncreaseAmount = (index) => {
    const updatedItems = [...basketData];
    const updatedAmount = updatedItems[index].amount + 1;
    updatedItems[index].amount = updatedAmount;
    updateBasketData(updatedItems);
  };

  const handleDecreaseAmount = (index) => {
    const updatedItems = [...basketData];
    const currentAmount = updatedItems[index].amount;
    if (currentAmount > 1) {
      const updatedAmount = currentAmount - 1;
      updatedItems[index].amount = updatedAmount;
      updateBasketData(updatedItems);
    }
  };
  // 체크된 상품 삭제
  const handleDeleteCheckedItem = () => {
    const confirmDelete = confirm("선택된 품목을 삭제하시겠습니까?")
    if (confirmDelete) {
      const deleteBasketData = basketData.filter(item => !item.checked)
      updateBasketData(deleteBasketData);
      console.log(deleteBasketData);
    }
    else return

  }
  // 상품 개별 삭제
  const handleDeleteItem = (item) => {
    const confirmDelete = confirm("품목을 삭제하시겠습니까?")
    if (confirmDelete) {
      const deleteBasketData = basketData.filter((basketItem) => ((basketItem.id !== item.id)))
      updateBasketData(deleteBasketData);
    }
    else {
      return
    }
  }

  console.log(basketData);
  return (
    <BasketContainer>
      <div className='inner'>
        <h3>장바구니</h3>
        <BasketLeftContainer>
          <div className='checkBox_container'>
            <div className='selectAll_checkBox'>
              <input
                type="checkbox"
                id='all_checkbox'
                checked={checkBoxSelectAll}
                onChange={handleSelectAllChange}
              />
              <label>전체상품({checkedBasketData.length}/{basketData.length})</label>
            </div>
            <div className='delete_checkBox'>
              <button onClick={handleDeleteCheckedItem}>선택삭제</button>
            </div>
          </div>
          {
            basketData.length == 0 &&
            <div className="item_box_none">
              <p>장바구니가 비어있습니다</p>
            </div>

          }
          {
            basketData && basketData.map((item, index) => {
              const { id, productName, price, titleImage, productSelect, productOption, amount } = item;
              return (
                <div className="item_box" key={id}>
                  <div className='product_info'>
                    <input
                      type="checkbox"
                      id={id}
                      checked={item.checked}
                      onChange={() => handleChangeCheckbox(item)}
                    />
                    <img src={titleImage} alt="" />
                    <div className='product_info_content'>
                      <p>{productName}</p>
                      <p>
                        <strong>{productName}</strong>
                        <span>{productSelect}<br />{productOption}</span>
                      </p>
                    </div>
                  </div>
                  <div className='product_info_amount'>
                    <button
                      onClick={() => handleIncreaseAmount(index)}
                      readOnly
                    >
                      +
                    </button>
                    <input type="text" value={amount} readOnly />
                    <button
                      onClick={() => handleDecreaseAmount(index)}
                      readOnly
                    >
                      -
                    </button>
                  </div>
                  <div className='product_info_price'>
                    <p>
                      <span>{(price * amount).toLocaleString()}원</span>
                    </p>
                  </div>
                  <div className='closeBox' onClick={() => handleDeleteItem(item)}>
                    <i><AiOutlineClose /></i>
                  </div>
                </div>

              )
            })
          }

        </BasketLeftContainer>
        <BasketRightContainer>
          <h4>최종 결제 금액</h4>
          <div className='orderBox'>
            <table>
              <tbody>
                <tr>
                  <th>주문금액</th>
                  <td>{sum.toLocaleString()}원</td>
                </tr>
                <tr>
                  <th>배송비</th>
                  <td>{deliveryFee.toLocaleString()}원</td>
                </tr>
                <tr>
                  <th>결제 예정금액</th>
                  <td>{totalCost.toLocaleString()}원</td>
                </tr>
              </tbody>
            </table>
          </div>
          <button>주문하기</button>
        </BasketRightContainer>
      </div >
    </BasketContainer >
  );
});

export default Basket;