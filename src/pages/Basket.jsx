import React, { memo, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import useUserStore from '../store/user-store';
import useBasketStore from '../store/basket-store';

import { BasketContainer, BasketTopContainer, BasketMiddleContainer, BasketBottomContainer } from './../styled/BasketStyles';


const Basket = memo(() => {
  const { loginState } = useUserStore(state => state);
  const { basketData } = useBasketStore(state => state);
  const navigate = useNavigate()
  useEffect(() => {
    if (!loginState) {
      alert('로그인이 필요한 서비스입니다.');
      navigate('/login');
    }
  }, [])
  return (
    <BasketContainer>
      <div className='inner'>
        <h3>장바구니</h3>
        <BasketTopContainer>
          <input type="checkbox" /><label>전체상품 선택</label>
        </BasketTopContainer>
        <BasketMiddleContainer>
          {
            !basketData &&
            <span>장바구니가 비어있습니다.</span>
          }
          {
            basketData && basketData.map(item => {
              const { id, productName, price, salePrice, category1, category2, fragranceInfo, desc, titleImage } = item;
              return (
                <>
                  <img src={titleImage} alt="" />
                  <span>{productName}</span>
                  <span>{salePrice}</span>
                </>
              )
            })
          }
        </BasketMiddleContainer>
        <BasketBottomContainer>
          <div>선택한 상품 0개 0원</div>
          <div>배송비 0원</div>
          <div>총 결제 예상금액 0원</div>
        </BasketBottomContainer>
        <button>총 0개 결제하기</button>
      </div>
    </BasketContainer >
  );
});

export default Basket;