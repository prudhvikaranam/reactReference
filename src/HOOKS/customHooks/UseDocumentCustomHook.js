import React, { useEffect } from 'react'

function UseDocumentCustomHook(count) {

  useEffect(() => {
    document.title = `Count ${count}`
  },[count]);
}

export default UseDocumentCustomHook