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

      {/* <h2 className='info'>The main use of <b>useCallback</b> hook is to prevent a component
        from triggering unless its own props have changed.<br />
        The useCallback Hook only runs when one of its dependencies update.<br />
        By this if any function has a logic which takes time, we can stop executing that unless that dependency is changed. This function runs at the component initialization and only when there is a dependency changed.<br />
        In the below code useCallback is applied on ChildA component hence the code inside it is not executed until there is a change in the dependency, Whereas the ChildB and ChildC component runs
      </h2> */}
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

      {/* <UseCallbackChildB countB={countC} /><br /> */}
      {/* <CallBackIncrementButton incrementCount={incrementCountC}>Increment C</CallBackIncrementButton> */}


      {/******************** IGNORE  ********************/}
      {/* <hr />
      <UseCallbackChildA countA={countA} incrementA={incrementCountA} />
      <hr />
      <UseCallbackChildB countB={countB} incrementB={incrementCountB} />
      <hr />
      <UseCallbackChildC countC={countC} incrementC={incrementCountC} />
      <hr /> */}
    </div>
  )
}

export default codeSnippet(UseCallBackParent, useCallbackBasicCodeSnip, 'useCallBackCodeSnippetId');