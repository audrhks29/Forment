import React, { memo, useEffect, useLayoutEffect, useState } from 'react';
import { Background, MyPageBottomContainer, MyPageContainer, MyPageTopContainer } from '../styled/MyPageStyles';

import useUserStore from '../store/user-store';
import { useNavigate } from 'react-router-dom';
import useOrderStore from '../store/order_store';
import useMyPageStore from '../store/myPage-store';

import Menu from '../components/myPage/Menu';
import OrderHistory from '../components/myPage/OrderHistory';
import ExchangeHistory from '../components/myPage/ExchangeHistory';
import Popup from '../components/myPage/Popup';
import EditUserInfo from '../components/myPage/EditUserInfo';

const MyPage = memo(() => {
  const { loginUserData } = useUserStore(state => state);
  const { initializeLoginState } = useUserStore(state => state);
  const { orderData } = useOrderStore(state => state);
  const { onList, popupState } = useMyPageStore(state => state);
  const { handleChangeList } = useMyPageStore(state => state);
  const [orderAndDeliveryAmount, setOrderAndDeliveryAmount] = useState(0)
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const filteredAmount = orderData.filter(item => item.state === "배송준비" || item.state === "배송중")
    if (orderData.length > 0) {
      setOrderAndDeliveryAmount(filteredAmount.length)
    }
  }, [orderData])

  useEffect(() => {
    initializeLoginState().then(() => {
      const { loginState } = useUserStore.getState();
      if (!loginState) {
        alert('로그인이 필요한 서비스입니다.');
        navigate('/login');
      }
    })
  }, []);

  return (
    <MyPageContainer>
      <div className='inner'>
        <MyPageTopContainer>
          <h3>마이페이지</h3>
          <div className='user_info'>
            <div className="userInfo_left">
              <strong>{loginUserData.user_name}</strong> 회원님은<br />
              <strong>{loginUserData.grade}</strong> 등급입니다.<br />
              <span>다음 등급인 <strong>패밀리</strong>까지 구매금액 <strong>30,000원</strong> 남았습니다.</span>
            </div>
            <div className='userInfo_right'>
              <ul>
                <li onClick={() => handleChangeList(1)}>
                  <img src="/images/icon/myPage/myPage_icon1.png" alt="" />
                  <p>주문 & 배송</p>
                  <p>{orderAndDeliveryAmount}개</p>
                </li>
                <li>
                  <img src="/images/icon/myPage/myPage_icon2.png" alt="" />
                  <p>리뷰</p>
                  <p>0개</p>
                </li>
                <li>
                  <img src="/images/icon/myPage/myPage_icon3.png" alt="" />
                  <p>적립금</p>
                  <p>0포인트</p>
                </li>
                <li>
                  <img src="/images/icon/myPage/myPage_icon4.png" alt="" />
                  <p>쿠폰</p>
                  <p>0개</p>
                </li>
              </ul>
            </div>
          </div>
        </MyPageTopContainer>
        <MyPageBottomContainer>
          <Menu />
          {onList == 1 && <OrderHistory />}
          {onList == 2 && <ExchangeHistory />}
          {onList == 3 && <EditUserInfo />}
        </MyPageBottomContainer>
        {
          popupState && <Popup />
        }
      </div >
      {
        popupState &&
        <Background>

        </Background>
      }
    </MyPageContainer >
  );
});

export default MyPage;