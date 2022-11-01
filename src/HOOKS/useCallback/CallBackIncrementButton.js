import React from 'react'

function CallBackIncrementButton(props) {
    console.log('Rendering Button component');
  return (
    <div>CallBackIncrementButton
        <button onClick={props.incrementCount}>{props.children}</button>
    </div>
  )
}

export default React.memo(CallBackIncrementButton);