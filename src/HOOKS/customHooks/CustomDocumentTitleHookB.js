import React, { useEffect, useState } from 'react'
import UseDocumentCustomHook from './UseDocumentCustomHook';

function CustomDocumentTitleHookB() {

  const [count, setCount] = useState(0);
  UseDocumentCustomHook(count);


  // useEffect(() => {
  //   document.title = `Count ${count}`
  // }, [count])

  return (
    <div>CustomDocumentTitleHookB<br />
      <button onClick={() => {
        setCount((prevCount) => {
          return prevCount + 1
        });
      }}>Increase Count{count}</button>
    </div>
  )
}

export default CustomDocumentTitleHookB