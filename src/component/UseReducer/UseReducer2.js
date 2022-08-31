import React, { useReducer } from 'react';

const initialState={
    firstCounter:0,
    secondCounter:10,
    
};
const reducer=(state, action)=>{
    switch(action.type){
        //first counter
        case 'increment':
            return {...state,firstCounter:state.firstCounter+action.value};
        case 'decrement':
            return {...state,firstCounter:state.firstCounter-action.value};
        
        //second counter
        case 'increment2':
            return {...state,secondCounter:state.secondCounter+action.value};
        case 'decrement2':
            return {...state,secondCounter:state.secondCounter-action.value};
        case 'reset':
            return initialState;
        default:
            return state;
    }
}
function UseReducer2() {
    const [count,dispatch]=useReducer(reducer,initialState)
   return (
    <div>
    
        <h3>useReducer2</h3>
        <h1>{count.firstCounter}</h1>
        <h1>{count.secondCounter}</h1>
        <button onClick={()=>dispatch({type:'increment',value:1})}>increase</button>
        <button onClick={()=>dispatch({type:"decrement",value:1})}>decrease</button>

        <button onClick={()=>dispatch({type:'increment',value:5})}>increase5</button>
        <button onClick={()=>dispatch({type:"decrement",value:5})}>decrease5</button>

        <button onClick={()=>dispatch({type:'increment2',value:5})}>increase c2 by 5</button>
        <button onClick={()=>dispatch({type:"decrement2",value:5})}>decrease c2 by 5</button>

        <button onClick={()=>dispatch({type:'reset'})}>reset</button>

    </div>
  )
}

export default UseReducer2