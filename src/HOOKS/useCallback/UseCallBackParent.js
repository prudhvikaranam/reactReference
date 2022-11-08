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
    console.log('incrementCountA method triggered');
    incrementA(countA + 1)
  }, [countA])

  console.log('Increment A', incrementA); // This returns a method

  // const incrementCountA = () => {
  //   console.log('incrementCounta method triggered');
  //   incrementA(countA + 1)
  // }

  const incrementCountB = () => {
    console.log('incrementCountB method triggered');
    incrementB(countB + 2)
  }

  const incrementCountC = () => {
    incrementC(countC + 3)
  }
  return (
    <div>UseCallBackParent
      <h1 className='info'>Performance optimization hook</h1>

      <h1 className='info'>
        All increment functions are created each time the parent component re-renders and when dealing with functions we always have to consider reference equality even though two functions have the exact same behaviour it does not mean there are equal to each other, so the function before the re-render is different to the function after the re-render and since the function is a prop <b>React.memo</b> sees that the prop has changed and will not prevent the re-render.<br />




        Lets say we have a huge calculation in incrementB function (which is also responsible for re-rendering a child component) which we dont want to perform when incrementA function is called, then in that case we can make use of the useCallback function in incrementA function and call only that function when value changed.
      </h1>
      Implementation:
      useCallback hook takes two parameters, first is the function and second is the array with dependencies.

      We make use of React.memo(Component) in the child components before making use of useCallback Hook.


      <h1 className='info'>
        useCallback, useMemo, and useEffect are used to optimize the performance of React-based applications as components are rerendered.<br /><br /><br />
        <div>
          useCallback
          useCallback is a react hook that returns a memorized callback when passed a function and a list of dependencies that set the parameters.<b> It’s useful when a component is passing a callback to its child component in order to prevent rendering.</b> It only changes the callback when one of its dependencies is changed.
        </div><br /><br />
        <div>
          useMemo
          useMemo is very similar to useCallback. It accepts a function and a list of dependencies,<b>but the difference between useMemo and useCallback is that useMemo returns the memo-ized value returned by the passed function. It only recalculates the value when one of the dependencies changes. </b> It’s very useful if you want to avoid expensive calculations on every render when the returned value isn’t changing.<br />
          It's useful when there is a function which calculates the high performa code,<span className='cons'><b> It is not recommended when a component is passing a callback to its child component. and also not to pass the state change function (which changes the value) inside the useMemo callback function which might result in ending unlimited loops</b></span>
        </div>
      </h1>


      <div id='useCallBackCodeSnippetId'></div>


      <hr />
      <UseCallbackChildA countA={countA} /><br />
      <CallBackIncrementButton incrementCount={incrementCountA} forComponent={"from  Component A"}>Increment A</CallBackIncrementButton>



      <hr />
      <UseCallbackChildB countB={countB} /><br />
      <CallBackIncrementButton incrementCount={incrementCountB} forComponent={"from  Component B"}>Increment B</CallBackIncrementButton>

      <hr />

    </div>
  )
}

export default codeSnippet(UseCallBackParent, useCallbackBasicCodeSnip, 'useCallBackCodeSnippetId');