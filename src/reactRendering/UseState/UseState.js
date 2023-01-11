import React, { useState } from 'react'
import useStateRenderingProcess from '../images/useStateRenderingProcess.png';
import useStateRenderingProcessSteps from '../images/useStateRenderingProcessSteps.png'
const UseState = () => {

    const [count, setCount] = useState(5);
    console.log('UseState component RENDERED');
    return (
        <div>
            React Rendering/Re-Rendering example based on useState example<br />
            Count : {count} <br/>
            <button onClick={() => {setCount((c) => c + 1)}}>Set count</button>
            <button onClick={() => {setCount(0)}}>Set count 0</button>
            <button onClick={() => {setCount(5)}}>Set count 5</button>

            <hr />
            <img src={useStateRenderingProcess} style = {{width : '60%'}}/>
            <img src={useStateRenderingProcessSteps} style = {{width : '60%'}}/>

        </div>

    )
}

export default UseState;