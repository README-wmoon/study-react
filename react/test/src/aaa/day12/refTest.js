// useRef 익혀보기

import { useRef, useState } from "react";

const RefTestComponent = () => {
    const [a, setA] = useState(0);
    const b = useRef([]);
    let c = 0;

    const showAll = ()=> {
        console.log('state변수 a: ', a);
        console.log('b.current: ', b.current.checked);
        console.log('일반변수 c: ', c);
    }

    return(
        <>
            <h1>RefTest 컴포넌트입니다</h1>
            <h1>State 변수 a의 값:{a}</h1>
            <input ref={(el)=>{b.current.push(el)}} type="checkbox"/>
            <input ref={(el)=>{b.current.push(el)}} type="checkbox"/>
            <input ref={(el)=>{b.current.push(el)}} type="checkbox"/>
            <input ref={(el)=>{b.current.push(el)}} type="checkbox"/>
            <input ref={(el)=>{b.current.push(el)}} type="checkbox"/>
            <input ref={(el)=>{b.current.push(el)}} type="checkbox"/>
            <button onClick={()=>{setA(a+1)}}>state 변수 변경</button>
            <button onClick={()=>{b.current++;}}>Ref객체 속 current변경</button>
            <button onClick={()=>{c++}}>일반 변수 변경</button>
            <br />
            <button onClick={showAll}>변수들 속의 값 보기</button>
        </>
    );
}

export default RefTestComponent;