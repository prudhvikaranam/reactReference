import React from 'react'

function UseMemoChildB(props) {
console.log('Child B componenent Rendered')

    return (
        <div>UseMemoChildB
            <br />
            Count B : {props.countB}
        </div>
    )
}

export default UseMemoChildB