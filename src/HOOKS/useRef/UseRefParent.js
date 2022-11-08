import React from 'react'
import codeSnippet from '../../HOC/codeSnippet/codeSnippetHOC'
import UseRefChildCounter from './UseRefChildCounter'
import UseRefChildInput from './UseRefChildInput'

const useRefSampleCode = `
const inputRef = useRef(0);
useEffect(() => {
    inputRef.current.focus();
}, [])

<input ref={inputRef} type='text' />
`


function UseRefParent() {
    return (
        <>
            <div>
                UseRefParent <br />
                UseRef Parent is used get the access to the DOM elements
            </div>
            <div id="useRefCodeSnippetId"></div>
            <hr />
            Input Component
            <UseRefChildInput />
            <hr />
            Counter Component
            <UseRefChildCounter />
        </>
    )
}

export default codeSnippet(UseRefParent, useRefSampleCode, 'useRefCodeSnippetId');

