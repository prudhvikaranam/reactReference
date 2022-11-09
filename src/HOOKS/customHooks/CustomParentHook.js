import React from 'react'
import CustomDocumentTitleHookA from './CustomDocumentTitleHookA';
import CustomDocumentTitleHookB from './CustomDocumentTitleHookB';

function CustomParentHook() {
    return (
        <div>CustomParentHook
            <br />
            <h1 className='info'>
                Custom Hook is basically a JavaScript function whose name starts with 'use'.<br />
                A custom hook can also call other Hooks if required.<br />
                Why?<br />
                Share logic between the Components, -- Alternative to HOC's and Render Props.
            </h1>
            <hr />
            <CustomDocumentTitleHookA />
            <hr />
            <CustomDocumentTitleHookB />
        </div>
    )
}

export default CustomParentHook 