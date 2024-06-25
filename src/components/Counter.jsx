import React, { useEffect, useState } from 'react'
// import Button from './Button';
import CounterButton from './CounterButton';

const Counter = () => {
    let counter = 0;

    //배열 선언
    //useState는 함수
    const [counter2, setCounter2] = useState(0);

    
    const increase = () => {
        counter += 1;
        setCounter2(counter2 + 1)
    };

    const decrease = () => {
        setCounter2(counter2 -1 );
    }

    useEffect(() => {
        console.log("counter2" , counter2);
    }, [counter2]);

    const [step, setStep] = useState(1);

//[실제데이터, 함수]

    const handleClick = (data) => {
        
            data === 'increase' ? setCounter2(counter2 + step) : setCounter2(counter2 - step );
        
    }

  return (
    <div>
        <div>Counter</div>
        <div>{counter2}</div>
        <div>
            <CounterButton  step={2} type={'increase'} onClick={handleClick}/>
            <CounterButton  step={2} type={'decrease'} onClick={handleClick}/>
            {/* <button type="button" className="bg-blue-800 text-white px-1" onClick={increase} >+1</button>
            <button type="button" className="bg-blue-800 text-white px-1" onClick={decrease}>-1</button> */}
        </div>
    </div>
  )
}

export default Counter