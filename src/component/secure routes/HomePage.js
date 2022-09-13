import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../../Auth/auth'

function HomePage() {
  const navLinkStyles=({isActive})=>{
    return {
      fontWeight:isActive? 'bold':'normal',
      textDecoration:isActive? 'none':'underline',
    }
  }
  const auth=useAuth();
  return (
    <div>
        <h3>Home Page</h3>
        <NavLink className="nav-link" to={"home"}>Home</NavLink>
        <NavLink className="nav-link" to={"/about"}>About</NavLink>

        <NavLink className="nav-link" to={"/profile"}>Profile</NavLink>
        {/* <NavLink className="nav-link" to={"/login"}>Login</NavLink> */}
        {!auth.user && (
          <NavLink style={navLinkStyles} to='/login'>Login</NavLink>
        )}

    </div>
  )
}

export default HomePage