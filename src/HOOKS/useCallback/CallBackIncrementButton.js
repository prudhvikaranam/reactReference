import React from 'react'

function CallBackIncrementButton(props) {
  console.log(`Rendering when state changed in ${props.forComponent}`);
  return (
    <div>CallBackIncrementButton
        <button onClick={props.incrementCount}>{props.children}</button>
    </div>
  )
}

export default React.memo(CallBackIncrementButton);