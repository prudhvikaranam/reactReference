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
    // console.log('In Parent component imcrementA method called');
    incrementA(countA + 1)
  }, [countA])

  const incrementCountB = () => {
    // console.log('In Parent component imcrementB method called');
    incrementB(countB + 2)
  }

  const incrementCountC = () => {
    // console.log('In Parent component imcrementC method called');
    incrementC(countC + 3)
  }
  return (
    <div>UseCallBackParent

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