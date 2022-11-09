import React, { useEffect, useState } from 'react'

function CustomDocumentTitleHookB() {

    const [count,setCount] = useState(0);


    useEffect(() => {
        document.title = `Count ${count}`
    },[count])

  return (
    <div>CustomDocumentTitleHookB<br/>
     <button onClick={() => {
        setCount((prevCount) => {
            return prevCount + 1
        });
     }}>Increase Count</button>
    </div>
  )
}

export default CustomDocumentTitleHookB