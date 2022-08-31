import React, { useEffect, useState } from "react";

function UseEffect(){
    const [count, setCount]=useState(0)
    useEffect(()=>{
        if(count>=1){

            document.title=`Chats (${count})`
        }
        else{   
            document.title=`Chat`
        }
    },[count])
    return(
        <>
            <h2>UseEffectRoute</h2>
            <h1>{count}</h1>
            <button onClick={()=>{setCount(count+1)}}>Add </button>
            <button onClick={()=>{setCount(0)}}>Reset </button>
            
        </>
    )
}
export default UseEffect;