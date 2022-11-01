import React from 'react'

function UseCallbackChildB(props) {
    console.log('Rendering ChildB component');

    return (
        <div>UseCallbackChildB
            <br />
            Count B : {props.countB}
        </div>
    )
}

export default React.memo(UseCallbackChildB);