import React from 'react';
import { Link, useNavigate, NavLink } from 'react-router-dom'

function Header(props) {
    const navigete = useNavigate();
    const goback = () => {
        //이전페이지 이동
        navigete(-1);
    }
    const goHome = () => {
        // /경로로 이동
        navigete("/");
    }
    //스타일 객체 생성
    const activeStyle = {
        backgroundColor: 'pink',
        fontSize: '24px'
    }
    return (
        <div>
           <h1>Green</h1>
           <ul>
                <li><NavLink to="/" style={({isActive}) => isActive ? activeStyle : null}>home</NavLink></li>
                <li><NavLink to="/product/product1" style={({isActive}) => isActive ? activeStyle : null} >product</NavLink></li>
                <li><NavLink to="/viwe?name=green&color=white" style={({isActive}) => isActive ? activeStyle : null}>view</NavLink></li>
                <li><NavLink to="/subpages" style={({isActive}) => isActive ? activeStyle : null}>subpages</NavLink></li>
            </ul>
            <div>
                <button onClick={goback}>뒤로 가기</button>
                <button onClick={goHome}>홈으로 가기</button>
            </div>
        </div>
    );
}

export default Header;

