import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer, HeaderLogoContainer, MainMenu, UserMenu } from '../styled/HeaderStyles';
import useNavStateStore from '../store/nav-state'
const Header = () => {
    const { activeSubMenu, csCenterSubMenu } = useNavStateStore(state => state)
    const { toggleActiveSubMenu, toggleCsCenterSubMenu } = useNavStateStore(state => state)
    return (
        <HeaderContainer style={{ height: activeSubMenu || csCenterSubMenu ? "250px" : "auto" }}>
            <MainMenu>
                <HeaderLogoContainer>
                    <Link to="/"><img src="../public/images/logo_header_main.svg" alt="" /></Link>
                </HeaderLogoContainer>
                <ul>
                    <li><Link to="/product">전 제품 보기</Link></li>
                    <li><Link to="/fragrance">프래그런스</Link></li>
                    <li><Link to="/delivery">정기배송</Link></li>
                    <li onMouseEnter={toggleActiveSubMenu} onMouseLeave={toggleActiveSubMenu}>활동
                        {
                            activeSubMenu
                            &&
                            <ul>
                                <li><Link to="/brand">브랜드</Link></li>
                                <li><Link to="/event">이벤트</Link></li>
                                <li><Link to="/campaign">캠페인</Link></li>
                            </ul>
                        }
                    </li>
                    <li onMouseEnter={toggleCsCenterSubMenu} onMouseLeave={toggleCsCenterSubMenu}>C/S 센터
                        {
                            csCenterSubMenu
                            &&
                            <ul>
                                <li><Link to="/notice">공지사항</Link></li>
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