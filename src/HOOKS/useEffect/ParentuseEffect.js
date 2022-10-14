import React, { useEffect, useRef } from 'react'
import codeSnippet from '../../HOC/codeSnippet/codeSnippetHOC';
import ChilduseEffect from './ChilduseEffect'
let myCode = `<b>
         useEffect(function,[dependencies])<br/>
     useEffect(() => {<br />
         //Some logic which needs to run (fetching data, updating DOM, timers, etc…)<br/>
     }, [dependencies]optional)
 </br>`
const ParentuseEffect = () => {
        return (
            <>
                <div>
                    ParentuseEffect
                    <h2 className='info2'>useEffect is a hook used to perform side effects in your components, This hook will be called whenever there is an updation in the DOM..<br />
                        It takes two arguments, first is the call back function and second is the [] which takes the dependencies.
                        Call back function is triggered when ever the component is rendered and it also gets triggered whenever there are changes in the dependencies.<br />

                    </h2>
                    <div id='codeSnippetId'>
                    </div><br />
                    when there is a change in the dependencies then only the effect will run else (if there is no code change) then effect method will not be triggered.

                </div>

                <hr />
                <ChilduseEffect />
            </>
        )
    }


export default codeSnippet(ParentuseEffect,myCode);