import React,{useState} from "react";



function UseState(){
    const [counter,setCounter]=useState(5);
    const increaseCounter=()=>{
        setCounter(counter*5);
    }
    const decreaseCounter=()=>{
        setCounter(counter/5);
    }
    return(
        <>
            <p style={{textAlign:"center"}}>increase the value of counter and decrease only if it is greater than 0</p>
            <h2>
                {counter}
            </h2>
            <button onClick={increaseCounter}>increase</button>
            <button onClick={counter>= 5 ? decreaseCounter:undefined}>decrease</button>


        </>
    )
}

export default UseState;