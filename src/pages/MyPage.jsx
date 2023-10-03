import React, { memo, useEffect } from 'react';
import { MyPageContainer } from '../styled/MyPageStyles';
import useUserStore from '../store/user-store';
import { useLocation, useNavigate } from 'react-router-dom';

const MyPage = memo(() => {
  const { loginState } = useUserStore(state => state);
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
        MyPageContainer페이지입니다.
      </div>
    </MyPageContainer>
  );
});

export default MyPage;