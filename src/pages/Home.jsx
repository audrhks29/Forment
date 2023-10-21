import React from 'react';

import { Link } from 'react-router-dom';

import { HomeContainer } from '../styled/HomeStyles';

import { AiOutlineArrowRight } from 'react-icons/ai';

const Home = () => {
    return (
        <HomeContainer>
            <div className='img_box'>
                <img src='../public/images/main/2300905_success_pc.jpg' alt="" />
            </div>
            <div className='text_box'>
                <h3>RENEWAL<br />COTTON SUCCESS</h3>
                <p>새로운 시대를 여는 성공</p>
                <Link to='/product'>
                    <i><AiOutlineArrowRight /></i>
                    <span>shop</span>
                </Link>
            </div>

        </HomeContainer>
    )
};

export default Home;