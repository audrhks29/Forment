import React, { memo, useEffect, useState } from 'react';
import { LoginContainer } from '../styled/LoginStyles';
import { Link, useNavigate } from 'react-router-dom';
import useUserStore from '../store/user-store';

const Login = memo(() => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { handleLogin } = useUserStore(state => state);
    const handleLoginClick = () => {
        handleLogin(username, password, navigate); // navigate 함수를 넘겨줍니다.
    };
    return (
        <LoginContainer>
            <div className="container" id="container">
                <div className="sign-in-container">
                    <form action="">
                        <div className="social-container">
                            <Link to='' className="kakao">
                                <img src="../public/images/login/log_sns_kakao.png" alt="" />
                                <span>카카오톡 간편 로그인/회원가입</span>
                            </Link>
                            <Link to='' className="naver">
                                <img src="../public/images/login/icn_naver.svg" alt="" />
                                <span>네이버 로그인</span>
                            </Link>
                            <Link to='' className="google">
                                <img src="../public/images/login/icn_apple.svg" alt="" />
                                <span>애플 로그인</span>
                            </Link>
                        </div>
                        <input
                            type="id"
                            placeholder="아이디"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="비밀번호"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <a href="#">비밀번호 찾기</a>
                        <button onClick={handleLoginClick}>로그인</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel">
                            <img src="../public/images/logo_header_main_white.svg" alt="" />
                            <Link to="/join">
                                <button>
                                    회원가입
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </LoginContainer>
    );
});

export default Login;