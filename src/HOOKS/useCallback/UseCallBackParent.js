import React, { useState, useCallback } from 'react'
import codeSnippet from '../../HOC/codeSnippet/codeSnippetHOC';
import CallBackIncrementButton from './CallBackIncrementButton';

import UseCallbackChildA from './UseCallbackChildA';
import UseCallbackChildB from './UseCallbackChildB'
import UseCallbackChildC from './UseCallbackChildC';


const useCallbackBasicCodeSnip = `
const incrementCountA = useCallback(() => {
  //Function logic
}, [dependency])`

function UseCallBackParent() {

  const [countA, incrementA] = useState(0);
  const [countB, incrementB] = useState(0);
  const [countC, incrementC] = useState(0);


  const incrementCountA = useCallback(() => {
    console.log('In Parent component imcrementA method called');
    incrementA(countA + 1)
  }, [countA])

  const incrementCountB = () => {
    console.log('In Parent component imcrementB method called');
    incrementB(countB + 2)
  }

  const incrementCountC = () => {
    // console.log('In Parent component imcrementC method called');
    incrementC(countC + 3)
  }
  return (
    <div>UseCallBackParent

      <h1 className='info'>
        All increment functions are created each time the parent component re-renders and when delaing with functions we always have to consider reference equality even though two functions have the exact same behaviour it does not mean there are equal to each other, so the function before the re-render is different to the function after the re-render and since the function is a prop <b>React.memo</b> sees that the prop has changed and will not prevent the re-render
      </h1>
      Implementation:
      useCallback hook takes two parameters, first is the function and second is the array with dependencies.
      <div id='useCallBackCodeSnippetId'></div>


      <hr />
      <UseCallbackChildA countA={countA} /><br />
      <CallBackIncrementButton incrementCount={incrementCountA}>Increment A</CallBackIncrementButton>



      <hr />
      <UseCallbackChildB countB={countB} /><br />
      <CallBackIncrementButton incrementCount={incrementCountB}>Increment B</CallBackIncrementButton>

      <hr />

    </div>
  )
}

export default codeSnippet(UseCallBackParent, useCallbackBasicCodeSnip, 'useCallBackCodeSnippetId');