import React from 'react'

function FunctionalPureChildComp(props) {
  console.log(props.name);
  return (
    <div>
      <h3>
        FunctionalPureChildComp
      </h3><br />
      {props.name}
    </div>
  )
}

export default React.memo(FunctionalPureChildComp);