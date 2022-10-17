import React, { useEffect, useState } from 'react'

function ChilduseEffect() {
  console.log('Child function triggered');
  let autoCount = 0;

  const [sampleCount,setSampleCount] = useState(0);
  useEffect(() => {
  console.log('Child function useEffect triggered');

    const interval = setInterval(() => {
      console.log(autoCount++)
    }, 1000);
    return function () { clearInterval(interval) }; //With this return value when the component is unmounted then loggers are stopped
  }, [sampleCount])


  function randomFunction(){
    console.log('Some Randon Function');
  }

  return (
    <div>
      ChilduseEffect<br />
      Sample Count : {sampleCount}
      <button onClick={() => {setSampleCount(sampleCount + 1)}}>Change Sample Count</button>
    </div>
  )
}

export default ChilduseEffect