import React,{useState,useEffect,useRef} from 'react'

function HookTimer() {
    const [timer,setTimer]=useState(0);
    const intervalRef=useRef();
   
    useEffect(() => {
        intervalRef.current=setInterval(()=>{
            setTimer(prevTimer=>prevTimer+1)
        },1000)
    
      return () => {
        clearInterval(intervalRef.current)
      }
    }, [])
    

  return (
    <div>
        <h3>UseRef Hook Timer</h3>
        <h1>{timer}</h1>
        <button onClick={()=>clearInterval(intervalRef.current)}>clear timer</button>

    </div>
  )
}

export default HookTimer