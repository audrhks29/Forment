import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer, MainMenu } from '../styled/HeaderStyles';
import useStore from '../store/nav-state'
const Header = () => {
    const { toggleSubMenu1, toggleSubMenu2, subMenu1, subMenu2 } = useStore(state => state)
    return (
        <HeaderContainer style={{ height: subMenu1 || subMenu2 ? "400px" : "auto" }}>
            <MainMenu>
                <Link to="/"><img src="../public/images/logo_header_main.svg" alt="" /></Link>
                <ul>
                    <Link to="/present"><li>선물제안</li></Link>
                    <Link to="/product"><li>전 제품 보기</li></Link>
                    <Link to="/fragrance"><li>프레그런스</li></Link>
                    <Link to="delivery"><li>정기배송</li></Link>
                    <li onMouseEnter={toggleSubMenu1} onMouseLeave={toggleSubMenu1}>활동
                        {
                            subMenu1
                            &&
                            <ul>
                                <li>브랜드</li>
                                <li>이벤트</li>
                                <li>캠페인</li>
                            </ul>
                        }
                    </li>
                    <li onMouseEnter={toggleSubMenu2} onMouseLeave={toggleSubMenu2}>C/S 센터
                        {
                            subMenu2
                            &&
                            <ul>
                                <li>공지사항</li>
                                <li>Q&A</li>
                                <li>자주묻는질문</li>
                                <li>멤버십</li>
                            </ul>
                        }
                    </li>
                </ul>
            </MainMenu>
        </HeaderContainer>
    );
};

export default Header;