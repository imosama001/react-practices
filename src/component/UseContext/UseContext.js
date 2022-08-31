import React from 'react'
import CompA from './CompA'

export const UserContext=React.createContext();
export const ChannelContext=React.createContext();

function UseContext() {
  return (
    <div>
    <UserContext.Provider value={"Osama"}>

        <ChannelContext.Provider value={"imosama001Channel"}>
            {/* <h3>useContext</h3> */}
            <CompA/>

        </ChannelContext.Provider>
    </UserContext.Provider>
    </div>
  )
}

export default UseContext