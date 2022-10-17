import React, { useContext } from 'react'
import ChildComponentD from './ChildComponentD'
import userContext from './Context';
import { userLocationContext } from './ParentContextFucntional';

function ChildComponentC() {
    const userName = useContext(userContext);
    const userLocation = useContext(userLocationContext)
    return (
        <div>
            ChildComponentC

            <div>User Name is <b>{userName}</b> and he is from <b>{userLocation}</b></div>
            <hr />
            <ChildComponentD />
        </div>
    )
}

export default ChildComponentC