import React, { memo, useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import useUserStore from '../store/user-store';
import useBasketStore from '../store/basket-store';

import { BasketContainer, BasketTopContainer, BasketMiddleContainer, BasketBottomContainer } from './../styled/BasketStyles';
import useOrderStore from '../store/order_store';

const Basket = memo(() => {
  const { loginState } = useUserStore(state => state);
  const { basketData } = useBasketStore(state => state);
  const { orderData } = useOrderStore(state => state);
  const { handleCheckbox } = useOrderStore(state => state);
  const [sum, setSum] = useState(0);
  const [deliveryFee, setDeliveryFee] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const navigate = useNavigate()
  // const [orderData, setOrderData] = useState([]);
  console.log(orderData);

  useEffect(() => {
    if (!loginState) {
      alert('로그인이 필요한 서비스입니다.');
      navigate('/login');
    }
  }, [])

  useEffect(() => {
    setSum(basketData.reduce((acc, item) => acc + item.salePrice, 0))
    sum > 49999 || sum == 0 ? setDeliveryFee(0) : setDeliveryFee(3000)
  }, [basketData])

  useEffect(() => {
    setTotalCost(sum + deliveryFee)
  }, [sum])

  return (
    <BasketContainer>
      <div className='inner'>
        <h3>장바구니</h3>
        <BasketTopContainer>
          <input
            type="checkbox"
            id='all_checkbox'
          />
          <label>전체상품 선택</label>
        </BasketTopContainer>
        <BasketMiddleContainer>
          {
            !basketData &&
            <span>장바구니가 비어있습니다.</span>
          }
          {
            basketData && basketData.map(item => {
              const { id, productName, price, titleImage, productSelect, productOption } = item;
              return (
                <div className="item_box" key={id}>
                  <input
                    type="checkbox"
                    id={id}
                    onClick={() => handleCheckbox(item)}
                  />
                  <img src={titleImage} alt="" />
                  <div className='product_info'>
                    <p>품명 : {productName}</p>
                    <p>
                      <span>가격 : {price.toLocaleString()}원</span>
                    </p>
                    <p>
                      <strong>{productName}</strong>
                      <span>{productSelect}/{productOption}</span>
                    </p>
                  </div>
                  <div className='btn_wrap'>
                    <button>옵션 수정하기</button>
                  </div>
                </div>
              )
            })
          }
        </BasketMiddleContainer>
        <BasketBottomContainer>
          <p><span>선택한 상품 {basketData.length.toLocaleString()}개 {sum.toLocaleString()}원</span></p>
          <p><span>+</span></p>
          <p>
            <span>배송비 {deliveryFee.toLocaleString()}원</span><br />
            {
              deliveryFee > 0 && <span className='color_red'>50,000원 이상 주문 시 배송비 "무료"</span>
            }
          </p>
          <p><span>=</span></p>
          <p><span>총 결제 예상금액 {totalCost.toLocaleString()}원</span></p>
        </BasketBottomContainer>
        <button>총 {basketData.length.toLocaleString()}개 결제하기</button>
      </div>
    </BasketContainer >
  );
});

export default Basket;