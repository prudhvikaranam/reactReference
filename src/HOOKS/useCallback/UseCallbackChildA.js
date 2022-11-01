import React, { useCallback } from 'react'

function UseCallbackChildA(props) {
    console.log('Rendering ChildA component');

    return (
        <div>UseCallbackChildA<br />
            Count A : {props.countA}
        </div>
    )
}

export default React.memo(UseCallbackChildA)