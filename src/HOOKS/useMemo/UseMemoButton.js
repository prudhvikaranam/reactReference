import React from 'react'

function UseMemoButton(props) {
    console.log(`Rendering when state changed in ${props.forComponent}`);

    return (
        <div>UseMemoIncrementButton
            <button onClick={props.incrementCount}>{props.children}</button>
        </div>
    )
}

export default React.memo(UseMemoButton);