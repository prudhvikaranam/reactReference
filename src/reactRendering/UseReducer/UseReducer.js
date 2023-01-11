import React from 'react';
import useReducerRenderingProcess from '../images/useReducerRenderingProcess.png'

import useReducerRenderingProcessSteps from '../images/useReducerRenderingProcessSteps.png'







const UseReducer = () => {
    return (
        <div>
            React Rendering/Re-Rendering example based on useReducer example<br/>
            <b>The Rendering and Re-rendering process is similar to the useState.</b>



            <br/>
            <img src={useReducerRenderingProcess} style={{ width: '60%' }} />
            <img src={useReducerRenderingProcessSteps} style={{ width: '60%' }} />

        </div>
    )
}

export default UseReducer