import React from 'react'

function UseCallbackChildC(props) {
    console.log('Callback C');

    return (
        <div>UseCallbackChildC

            Count C : {props.countC}
            <button onClick={props.incrementC}>IncrementCount C</button>
        </div>
    )
}

export default UseCallbackChildC