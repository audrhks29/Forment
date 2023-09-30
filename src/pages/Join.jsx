import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { JoinContainer } from '../styled/JoinStyles';

const Join = memo(() => {
    return (
        <JoinContainer>
            <div class="container" id="container">
                <div class="sign-up-container">
                    <form action="#">
                        <h3>회원가입</h3>
                        <div className="social-container">
                            <Link to='' className="kakao">
                                <img src="../public/images/login/log_sns_kakao.png" alt="" />
                                <span>카카오톡 회원가입</span>
                            </Link>
                            <Link to='' className="naver">
                                <img src="../public/images/login/icn_naver.svg" alt="" />
                                <span>네이버 회원가입</span>
                            </Link>
                            <Link to='' className="google">
                                <img src="../public/images/login/icn_apple.svg" alt="" />
                                <span>애플 회원가입</span>
                            </Link>
                        </div>
                        <h4>필수정보입력</h4>
                        <div className='join-info'>
                            <label>아이디</label><input type="id" placeholder="아이디" />
                            <label>비밀번호</label><input type="password" placeholder="비밀번호" />
                            <label>비밀번호 확인</label><input type="email" placeholder="비밀번호 확인" />
                            <label>이메일</label><input type="email" placeholder="이메일" />
                        </div>
                        <h4>개인정보입력</h4>
                        <div className='join-info'>
                            <label>이름</label><input type="text" name="user_Name" placeholder="이름" />
                            <label>연락처</label><input type="tel" name="user_phone" placeholder="연락처" />
                            <label>생년월일</label><input type="date" name="user_birthday" placeholder="이메일" />
                        </div>
                        <h4>선택사항</h4>
                        <div className='join-info'>
                            <label className="gender_label">성별</label>
                            <label for="male">남자</label><input className="w100" type="radio" id="male" name="user_gender" value="male" />
                            <label for="female">여자</label><input className="w100" type="radio" id="female" name="user_gender" value="female" />
                            <label>추천인</label><input type="text" name="user_friend" placeholder="추천인 ID" />
                        </div>
                    </form>
                </div>
            </div>
        </JoinContainer>
    );
});

export default Join;