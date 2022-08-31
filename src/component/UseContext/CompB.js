import React from 'react'
import {useContext} from "react"
import {UserContext,ChannelContext} from "./UseContext"

//With the help of useContext

function CompB() {
  const user=useContext(UserContext)
  const channel=useContext(ChannelContext)
  return (
    <div>
    <p>with the help of useContext</p>
    <h2>
        {user} - {channel}
    </h2>
    {/* <CompC/> */}
    </div>
    
  )
}

export default CompB