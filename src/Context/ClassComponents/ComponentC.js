import React, { Component, useContext } from 'react'
import { UserConsumer, UserContext } from './BasicUserContext'

export class ComponentC extends Component {
    render() {
        return (
            <>
                <p>ComponentC</p>

                {/* There should be only single child inside UserConsumer*/}
                <UserConsumer>  
                    {
                        (user) => {
                            return <p>User Name is : {user}</p>
                        }
                    }
                </UserConsumer>
            </>
        )
    }
}

export default ComponentC