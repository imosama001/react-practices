import React,{useState,useEffect} from 'react'

function UseEffectTimer() {
  const [count, setCount] = useState(0)

  const tick=()=>{
    setCount(prevCount=>prevCount+1)
  }
  useEffect(() => {
    const interval=setInterval(tick,1000)
  
    return () => {
      clearInterval(interval)
    }
  }, []);
  
  return (
    <div>
    <h2>
    This timer goes on and on {count}
    </h2>
    </div>
  )
}

export default UseEffectTimer