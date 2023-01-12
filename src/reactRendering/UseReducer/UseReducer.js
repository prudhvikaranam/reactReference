import React from 'react';
import { useReducer } from 'react';
import useReducerRenderingProcess from '../images/useReducerRenderingProcess.png'

import useReducerRenderingProcessSteps from '../images/useReducerRenderingProcessSteps.png'



const initialCount = 0;

const reducer = (state, action) => {
    switch (action) {
        case 'increment': {
            return state + 1;
        }
        case 'reset': {
            return initialCount;
        }
        case 'decrement': {
            return state - 1;
        }
        default: return state;
    }
}




const UseReducer = () => {
    const [count, dispatch] = useReducer(reducer, initialCount);
    console.log('UseReducer component RENDERED');
    return (
        <div>
            <b className='info'>Not working as expected : https://github.com/facebook/react/issues/24596 <br/>
            This approach will work only in the React 16 or lesser than 16 version and will not work in above versions</b><br/>
            React Rendering/Re-Rendering example based on useReducer example<br />
            <b>The Rendering and Re-rendering process is similar to the useState.</b><br />

            Current Count is :: {count}<br />
            <button onClick={() => dispatch('increment')}>Set count</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>


            <br />
            <img src={useReducerRenderingProcess} style={{ width: '60%' }} />
            <img src={useReducerRenderingProcessSteps} style={{ width: '60%' }} />

        </div>
    )
}

export default UseReducer