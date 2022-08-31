import React,{useEffect,useRef} from 'react'

function FocusInput() {
  const inputRef=useRef(null)
  useEffect(()=>{
    //focus the input element
    inputRef.current.focus()
  },[])

  return (
    <div>
      <h3>UseRef Focus Input</h3>
      <input ref={inputRef} type='text'/>
    </div>
  )
}

export default FocusInput