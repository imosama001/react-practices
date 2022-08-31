import React, { useState,useEffect } from 'react'
import axios from 'axios'
function UseEffectApi() {
  const [post,setPost]=useState({});
  const [id,setId]=useState(1)
  const [idFromButton,setIdFromButton]=useState(1)
  const handleClick=()=>{
    setIdFromButton(id)
  }

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts/"+idFromButton)
    .then(res =>{
    console.log(res)
    setPost(res.data)
    })
    .catch(err=>{
    console.log(err)
    })
},[idFromButton])
//   .then(()=>{
//     console.log("End of fetching data")
//   })
  return (
    <div>
      <input type='text' value={id} onChange={e=>setId(e.target.value)}/>
      <button type='button' onClick={handleClick}>Fetch Post</button>
      <h4>{post.title}</h4>
    </div>
  )
}

export default UseEffectApi