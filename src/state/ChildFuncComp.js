import React from 'react'

function ChildFuncComp(props) {
    const {state} = props;
  return (
    <div>
        <h3>Hey I'm a Child Functional component</h3>
        <p>Hey I'm a State coming from Parent Class Component and I will be changed when my state value is changed in the Parent component --- <span className='info2'>{state.name}</span></p>
        <p>{state.title}</p>
    </div>
  )
}

export default ChildFuncComp