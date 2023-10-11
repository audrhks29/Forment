import React, { memo, useEffect } from 'react';
import { MyPageBottomContainer, MyPageContainer, MyPageTopContainer } from '../styled/MyPageStyles';
import useUserStore from '../store/user-store';
import { useLocation, useNavigate } from 'react-router-dom';

const MyPage = memo(() => {
  const { loginState, loginUserData } = useUserStore(state => state);
  const { handleMoveLoginPage } = useUserStore(state => state);
  const navigate = useNavigate()

  useEffect(() => {
    if (!loginState) {
      alert('로그인이 필요한 서비스입니다.');
      navigate('/login');
    }
  }, [])
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
              <ul className='infoBox'>
                <li>
                  <img src="../public/images/icon/myPage/myPage_icon1.png" alt="" />
                  <p>주문 & 배송</p>
                  <p>0개</p>
                </li>
                <li>
                  <img src="../public/images/icon/myPage/myPage_icon2.png" alt="" />
                  <p>리뷰</p>
                  <p>0개</p>
                </li>
                <li>
                  <img src="../public/images/icon/myPage/myPage_icon3.png" alt="" />
                  <p>적립금</p>
                  <p>0포인트</p>
                </li>
                <li>
                  <img src="../public/images/icon/myPage/myPage_icon4.png" alt="" />
                  <p>쿠폰</p>
                  <p>0개</p>
                </li>
              </ul>
            </div>
          </div>
        </MyPageTopContainer>
        <MyPageBottomContainer>
          <div className='menu_bar'>
            <div className='menu1'>
              <p>나의 쇼핑 정보</p>
              <ul>
                <li>취소/교환/반품 내역</li>
                <li>배송지 수정</li>
              </ul>
            </div>
            <div className='menu2'>
              <p>나의 쇼핑 활동</p>
              <ul>
                <li>회원정보 수정</li>
                <li>리뷰관리</li>
              </ul>
            </div>
          </div>
          <div className='order_history'>
            <table>
              <thead>
                <tr>
                  <th>주문일자</th>
                  <th>상품정보</th>
                  <th>수량</th>
                  <th>주문번호</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>

              </tbody>
            </table>
          </div>
        </MyPageBottomContainer>
      </div>
    </MyPageContainer>
  );
});

export default MyPage;