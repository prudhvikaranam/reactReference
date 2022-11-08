import React from 'react'

function UseMemoChildA(props) {
    console.log('Child A componenent Rendered')
    return (
        <div>UseMemoChildA<br />
            Count A : {props.countA}
        </div>
    )
}

export default UseMemoChildA