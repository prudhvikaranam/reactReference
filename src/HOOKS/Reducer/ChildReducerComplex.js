import React, { useReducer } from 'react'
import codeSnippet from '../../HOC/codeSnippet/codeSnippetHOC';

const complexObjectUseReducer = `
const initialState = {
    firstCounter: 0,
    secondCounter: 0
}

const reducer = (state, action) => {
    // console.log('Current state value',state);
    switch (action.type) {
        case 'add':
            return { ...initialState, firstCounter: state.firstCounter + action.value }; // *******WHAT EVER WE RETURN HERE WILL BE UPDATED INTO THE COUNT VARIABLE BELOW..*******..WE ARE NOT RETURNING INTO THE INITIAL STATE HERE......*******.. the reason why we are changing only firstCounter is it is not the same firstCounter which we defined in initialState, here we are returning a new firstCounter property into the count since we already have a firstCounter property in intialState that will be replaced and updated into the count property. To test this try adding another property and it will be added to the count object
        case 'substract':
            return { ...initialState, firstCounter: state.firstCounter - action.value, someOther: 1 };
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

const [count, dispatch] = useReducer(reducer, initialState);
// console.log('Count returned value',count);
// console.log('initialState returned value',initialState);

return (
    <div>
        <h1 className='info'>Complex Object level useReducer</h1>

        <h1>This component has a basics of the Reducer concepts.</h1>
        Count : {count.firstCounter}
        <button onClick={() => dispatch({ type: 'add', value: 2 })}>Add Count</button>
        <button onClick={() => dispatch({ type: 'substract', value: 2 })}>Reduce Count</button >
        <button onClick={() => dispatch({ type: 'reset' })}>Reset Count</button>
    </div>
)`


function ChildReducerComplex() {
    const initialState = {
        firstCounter: 0,
        secondCounter: 0
    }

    const reducer = (state, action) => {
        // console.log('Current state value',state);
        switch (action.type) {
            case 'add':
                return { ...initialState, firstCounter: state.firstCounter + action.value }; // *******WHAT EVER WE RETURN HERE WILL BE UPDATED INTO THE COUNT VARIABLE BELOW..*******..WE ARE NOT RETURNING INTO THE INITIAL STATE HERE......*******.. the reason why we are changing only firstCounter is it is not the same firstCounter which we defined in initialState, here we are returning a new firstCounter property into the count since we already have a firstCounter property in intialState that will be replaced and updated into the count property. To test this try adding another property and it will be added to the count object
            case 'substract':
                return { ...initialState, firstCounter: state.firstCounter - action.value, someOther: 1 };
            case 'reset':
                return initialState;
            default:
                return state;
        }
    }

    const [count, dispatch] = useReducer(reducer, initialState);
    // console.log('Count returned value',count);
    // console.log('initialState returned value',initialState);

    return (
        <div>
            <h1 className='info'>Complex Object level useReducer</h1>

            <h1>This component has a basics of the Reducer concepts.</h1>
            Count : {count.firstCounter}
            <button onClick={() => dispatch({ type: 'add', value: 2 })}>Add Count</button>
            <button onClick={() => dispatch({ type: 'substract', value: 2 })}>Reduce Count</button >
            <button onClick={() => dispatch({ type: 'reset' })}>Reset Count</button>


            <div id='codeSnippetIdcomplexObjectUseReducer'></div>
        </div>
    )
}

export default codeSnippet(ChildReducerComplex, complexObjectUseReducer,'codeSnippetIdcomplexObjectUseReducer');