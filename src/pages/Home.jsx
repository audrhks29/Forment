import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div style={{ margin: "74px" }}>
            <img src='../public/images/main/2300905_success_pc.jpg' alt="" />
            <h3>RENEWAL<br />COTTON SUCCESS</h3>
            <p>새로운 시대를 여는 성공</p>
            <Link to=''>shop</Link>
        </div>
    )
};

export default Home;