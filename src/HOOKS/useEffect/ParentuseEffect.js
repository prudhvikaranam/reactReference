import React, { useEffect, useRef, useState } from 'react'
import codeSnippet from '../../HOC/codeSnippet/codeSnippetHOC';
import ChilduseEffect from './ChilduseEffect'
let effectCodeSnippet = `
                            useEffect(function,[dependencies])
                            useEffect(() => {
                                //Some logic which needs to run (fetching data, updating DOM, timers, etc…)
                            }, [dependencies]optional)
                        `
let i = 0;
const ParentuseEffect = (props) => {
    const [count, setCount] = useState(0);
    const [childComponent, componentLoaded] = useState(true);
    console.log(`***************************This is props coming from HOC ${props.someProps}***************************`);

    useEffect(() => {
        if (count < 10) { // This way  we can even write the conditions
            console.log('**************Use Effect called**************');
            i++;
            let useEffectStatus = document.getElementById('useEffectStatus');
            useEffectStatus.innerHTML = `useEffect Method has been called <b>${i}</b> times`
        }
        console.log('Use Effect triggered');
    }, [count])

    function changeCount() {
        setCount((prevCount) => {
            return prevCount + 1
        })
    }

    return (
        <>
            <div>
                ParentuseEffect,
                With the below button try changing the state and see how useEffect works when there is a state dependency and without adding state dependency.
                <div id='useEffectStatus' className='success'></div>
                <div>State Count <b>{count}</b></div>
                <button onClick={changeCount}>Change state Count</button>
                <h2>Below example show how to perform the cleanup in the useEffect...</h2>
                <button onClick={() => { componentLoaded(!childComponent) }}>Toggle Child Component</button>
                <br />
                <hr />
                {childComponent && <ChilduseEffect />}
                <br />
                <br />
                <br />
                <br />
                <h1>Guide</h1>
                <h2 className='info2'>useEffect is a hook used to perform side effects in your components, This hook will be called whenever there is an updation in the DOM..<br />
                    It takes two arguments, first is the call back function and second is the [dependencies] which takes the dependencies.
                    Call back function is triggered when ever the component is rendered and it also gets triggered whenever there are changes in the dependencies.<br />

                </h2>
                <b>
                <div id='codeSnippetId'>
                </div></b><br />
                Dependencies might be useful for <b>conditional</b> trigerrings, when there is a change in the dependencies then only the effect will run else (if there is no code change) then effect method will not be triggered.
                <h1 className='info'>When an <b>empty array is passed as second argument(dependency) [], then useEffect Method is triggered only once</b> i.e., at the time of component creation and not every time when there is a DOM updation..</h1>
                <h1 className='info'>If there is a running code in useEffect method it won't be stopped even after <b>unMounting the component, to stop the running code after unMounting the component we need to return a function (mostly named function) from the useEffect method.</b></h1>
            </div>


        </>
    )
}


export default codeSnippet(ParentuseEffect, effectCodeSnippet);