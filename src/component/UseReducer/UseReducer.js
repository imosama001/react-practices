import React, { useReducer } from 'react'

const initialState=0;
const reducer=(state, action)=>{
    switch(action){
        case 'increment':
            return state+1;
        case 'decrement':
            return state-1;
        case 'reset':
            return initialState;
        default:
            return state;
    }
}
function UseReducer() {
    const [count,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
        <h3>useReducer</h3>
        <h1>{count}</h1>
        <button onClick={()=>dispatch('increment')}>increase</button>
        <button onClick={()=>dispatch("decrement")}>decrease</button>
        <button onClick={()=>dispatch('reset')}>reset</button>

    </div>
  )
}

export default UseReducer