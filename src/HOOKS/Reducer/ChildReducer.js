import React, { useReducer } from 'react'

function ChildReducer() {

    const intialCount = 0;

    const reducer = (state, action) => {
        switch (action) {
            case 'add':
                return state + 1;
            case 'substract':
                return state - 1;
            case 'reset':
                return intialCount;
            default:
                return state;
        }
    }


    const [count, dispatch] = useReducer(reducer, intialCount);

    return (
        <div>
            <h1>This component has a basics of the Reducer concepts.</h1>
            Count : {count}
            <button onClick={() => dispatch('add')}>Add Count</button>
            <button onClick={() => dispatch('substract')}>Reduce Count</button >
            <button onClick={() => dispatch('reset')}>Reset Count</button>
        </div>
    )
}

export default ChildReducer