import React, { memo } from 'react';
import { LoginContainer } from '../styled/LoginStyles';
import { Link } from 'react-router-dom';

const Login = memo(() => {
    return (
        <LoginContainer>
            <div class="container" id="container">
                <div class="sign-in-container">
                    <form action="#">
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
                        <input type="id" placeholder="아이디" />
                        <input type="password" placeholder="비밀번호" />
                        <a href="#">비밀번호 찾기</a>
                        <button>로그인</button>
                    </form>
                </div>
                <div class="overlay-container">
                    <div class="overlay">
                        <div class="overlay-panel">
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