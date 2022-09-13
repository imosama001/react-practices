import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Auth/auth'

function ProfilePage() {
    const navigate=useNavigate()
    const auth=useAuth();
    const handleLogout=()=>{
        auth.logout();
        navigate("/secureHomePage")
    }
  return (
    <div>
        <h3>Profile Page</h3>
        <h4>Welcome {auth.user}</h4>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default ProfilePage