import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer, HeaderLogoContainer, MainMenu, UserMenu } from '../styled/HeaderStyles';
import useStore from '../store/nav-state'
const Header = () => {
    const { toggleSubMenu1, toggleSubMenu2, subMenu1, subMenu2 } = useStore(state => state)
    return (
        <HeaderContainer style={{ height: subMenu1 || subMenu2 ? "250px" : "auto" }}>
            <MainMenu>
                <HeaderLogoContainer>
                    <Link to="/"><img src="../public/images/logo_header_main.svg" alt="" /></Link>
                </HeaderLogoContainer>
                <ul>
                    {/* <li><Link to="/present">선물제안</Link></li> */}
                    <li><Link to="/product">전 제품 보기</Link></li>
                    <li><Link to="/fragrance">프레그런스</Link></li>
                    <li><Link to="/delivery">정기배송</Link></li>
                    <li onMouseEnter={toggleSubMenu1} onMouseLeave={toggleSubMenu1}>활동
                        {
                            subMenu1
                            &&
                            <ul>
                                <li><Link to="/brand">브랜드</Link></li>
                                <li><Link to="/event">이벤트</Link></li>
                                <li><Link to="/campaign">캠페인</Link></li>
                            </ul>
                        }
                    </li>
                    <li onMouseEnter={toggleSubMenu2} onMouseLeave={toggleSubMenu2}>C/S 센터
                        {
                            subMenu2
                            &&
                            <ul>
                                <li><Link to="/notice">공지사항</Link></li>
                                <li><Link to="/qna">Q&A</Link></li>
                                <li><Link to="/faq">자주묻는질문</Link></li>
                                <li><Link to="/membership">멤버십</Link></li>
                            </ul>
                        }
                    </li>
                </ul>
            </MainMenu>
            <UserMenu>
                <ul>
                    <li><Link to="/login">로그인</Link></li>
                    <li><Link to="/join">회원가입</Link></li>
                    <li><Link to="/order">주문</Link></li>
                    <li><Link to="/basket">장바구니</Link></li>
                    <li><Link to="/mypage">마이페이지</Link></li>
                </ul>
            </UserMenu>
        </HeaderContainer>
    );
};

export default Header;