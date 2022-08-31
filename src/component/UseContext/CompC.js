import React from 'react'
import {ChannelContext, UserContext} from './UseContext'

///without use context

function CompC() {
  return (
    <div>
        {/* <h2>CompC</h2> */}
        <UserContext.Consumer>
        {
            userName=>{
                return (
                  <ChannelContext.Consumer>
                    {
                      channelName=>{
                      return (<p>UserContext value is {userName} and ChannelContext value is {channelName}</p>
                      )

                      }
                    }
                  </ChannelContext.Consumer>
                )
            }
        }
        </UserContext.Consumer>
        <h3>hells</h3>
    </div>
  )
}

export default CompC