import React, { useContext } from 'react'
import userContext from './Context';

function ChildComponentD() {

    return (
        <>
            ChildComponentD
            <userContext.Consumer>
                {(user) => {
                    return <div>User name has been drilled down from Parent Context with user name as : <b>{user}</b></div>
                }}
            </userContext.Consumer>
        </>
    )
}

export default ChildComponentD