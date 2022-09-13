import React from 'react'
import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../Auth/auth'

function LoginPage() {
    const [user,setUser]=useState('');
    const auth=useAuth()
    const navigate=useNavigate();
    const location=useLocation();
    const redirectPath=location.state?.path|| '/secureHomePage'

    const handleLogin=()=>{
        auth.login(user);
        navigate(redirectPath,{replace:true})
    }
  return (
    <div>
        <h3>Login Page</h3>
        <label>
            <input type="text" onChange={(e)=>setUser(e.target.value)} placeholder='login'></input>
        </label>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default LoginPage