import React,{useState,useMemo} from 'react'

function UseMemo() {
  const [counterOne, setCounterOne]=useState(0)
  const [counterTwo, setCounterTwo]=useState(0)
  const incrementOne=()=>{
    setCounterOne(counterOne+1)
  }
  const incrementTwo=()=>{
    setCounterTwo(counterTwo+1)
  }
  const isEven=useMemo(()=>{
    let i=0
    while(i<2000000000) i++;
    if(counterOne%2===0){
      return true;
    }
    else return false
  },[counterOne])
  return (
    <div>
      <h3>UseMemo</h3>
      <button onClick={incrementOne}>Count One - {counterOne}</button>
      <span>{isEven ? 'even':'odd'}</span>
      <button onClick={incrementTwo}>Count Two - {counterTwo}</button>

    </div>
  )
}

export default UseMemo