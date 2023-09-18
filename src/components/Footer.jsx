import React from 'react';
import { Link } from 'react-router-dom';
import { FooterContainer } from '../styled/FooterStyles';

const Footer = () => {
    return (
        <FooterContainer>
            <div>
                <Link to="/"><img src="../public/images/logo_header_main.svg" alt="" /></Link>
                <p>주식회사 에이피알</p>
                <p>대표이사 : 김병훈 / 서울특별시 송파구 올림픽로 300, 36층 (신천동, 롯데월드타워)</p>
                <p>사업자등록번호 220-88-89441 [사업자정보확인]</p>
                <p>통신판매업신고 : 제2020-서울송파-1274</p>
                <p>개인정보책임자 : 신재하(forment@apr-in.com)</p>
                <p>고객님은 안전거래를 위해 현금 등으로 결제 시 저희 쇼핑몰에서 가입한 PG 사의 구매안전서비스를 이용하실 수 있습니다.</p>
                <p>© APR all rights reserved. Hosted by CAFE24</p>
            </div>
            <div>
                <p>이용약관</p>
                <p>개인정보처리방침</p>
            </div>
            <div>
                <p>회사소개</p>
                <p>협업문의</p>
                <p>반품 및 환불규정</p>
            </div>
            <div>
                <p><strong>1544-7458</strong></p>
                <p>09:00 ~ 18:00</p>
                <p>12:00 ~ 13:00 (점심시간)</p>
                <p>주말 및 공휴일 휴무</p>
            </div>
        </FooterContainer>
    );
};

export default Footer;