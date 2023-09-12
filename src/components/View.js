import React, { useState } from 'react';
import {useLocation, useSearchParams} from 'react-router-dom'

function View(props) {
    const location = useLocation();
    console.log(location);
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get("name"));  //green
    console.log(searchParams.get("color")); //white
    const name = searchParams.get("name");
    const color = searchParams.get("color");
    return (
        <div>
            <h2>상세보기</h2>
            <p>상세보기 페이지 입니다.</p>
            <p>name 값은 : {name}</p>
            <p>color 값은 : {color}</p>
        </div>
    );
}

export default View;
