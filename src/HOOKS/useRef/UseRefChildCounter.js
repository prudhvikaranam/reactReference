import React, { useEffect, useMemo, useRef, useState } from 'react'

function UseRefChildCounter() {

  const [count, setCount] = useState(0);
  const [dummy, setDummy] = useState(0);
  
  const stopCountRef = useRef();

  console.log('Counter Component');
  
  useEffect(() => {
    stopCountRef.current = setInterval(() => {
      setCount((prevCount) => {
        return prevCount + 1;
      })
    }, 1000);
  }, [dummy])

  function stopCount(){
    clearInterval(stopCountRef.current);
  }
  return (
    <div>
      UseRefChildCounter
      <br />
      Counter : {count}<br />
      <button onClick = {() => {stopCount()}}>Stop count</button>
    </div>
  )
}

export default React.memo(UseRefChildCounter)