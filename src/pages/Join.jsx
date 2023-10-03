import React, { memo, useState } from 'react';

import { Link } from 'react-router-dom';


import { JoinContainer } from '../styled/JoinStyles';
import JoinPageCheckBox from './../components/join/CheckBox';

const Join = memo(() => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(true);
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        // 비밀번호 변경 시, 비밀번호 확인 필드와 비교
        if (e.target.value !== confirmPassword) {
            setPasswordMatch(false);
        } else {
            setPasswordMatch(true);
        }
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        // 비밀번호 확인 변경 시, 비밀번호와 비교
        if (e.target.value !== password) {
            setPasswordMatch(false);
        } else {
            setPasswordMatch(true);
        }
    };
    const handleSubmit = (e) => {

    }
    return (
        <JoinContainer>
            <div className="container" id="container">
                <div className="sign-up-container">
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
                            <label htmlFor='username'>이름</label>
                            <input type="text" id="user_name" name="user_name" placeholder="이름" required autoComplete="off" />
                            <label>아이디</label>
                            <input type="id" id="user_id" name="user_id" placeholder="아이디" required autoComplete="off" className='id_input' />
                            <button className='id_confirm'>중복확인</button>
                            <label htmlFor="password">비밀번호</label>
                            <input type="password" id="user_password" name="user_password" placeholder="비밀번호" required autoComplete="off" onChange={handlePasswordChange} value={password} />
                            <label>비밀번호 확인</label>
                            <input type="password" id="confirm_password" name="confirm_password" placeholder="비밀번호 확인" required autoComplete="off" onChange={handleConfirmPasswordChange} value={confirmPassword} />
                            {
                                !passwordMatch && <em>비밀번호가 일치하지 않습니다. 다시 입력하세요.</em>
                            }
                            <label>이메일</label>
                            <input type="email" id="user_email" name="user_email" placeholder="이메일" required autoComplete="off" />
                            <label>연락처</label>
                            <input type="tel" id="user_phone" name="user_phone" placeholder="연락처" required />
                            <label>생년월일</label>
                            <input type="date" id="user_birthday" name="user_birthday" required />
                        </div>
                        <h4>선택사항</h4>
                        <div className='join-info'>
                            <label>성별</label>
                            <label className="gender_label" htmlFor="male">남자</label>
                            <input className="w70" type="radio" id="male" name="user_gender" value="male" />
                            <label className="gender_label" htmlFor="female">여자</label>
                            <input className="w70" type="radio" id="female" name="user_gender" value="female" />
                            <label>추천인</label>
                            <input type="text" name="user_friend" placeholder="추천인 ID" />
                        </div>
                        <JoinPageCheckBox />
                        <button type='submit'>가입하기</button>
                    </form>
                </div>
            </div>
        </JoinContainer>
    );
});

export default Join;