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
            return { ...initialState, firstCounter: state.firstCounter + action.value }; 
            
            
            // *******WHAT EVER WE RETURN HERE WILL BE UPDATED INTO THE COUNT VARIABLE BELOW..*******..WE ARE NOT RETURNING INTO THE INITIAL STATE HERE......*******.. the reason why we are changing only firstCounter is it is not the same firstCounter which we defined in initialState, here we are returning a new firstCounter property into the count since we already have a firstCounter property in intialState that will be replaced and updated into the count property. To test this try adding another property and it will be added to the count object// *******
        
        
        
            case 'substract':
            return { ...initialState, firstCounter: state.firstCounter - action.value, someOther: 1 };
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

const [count, dispatch] = useReducer(reducer, initialState);
const [count2, dispatch2] = useReducer(reducer, initialState);

return (
    <div>

            First Counter : {count.firstCounter}
            <button onClick={() => dispatch({ type: 'add', value: 2 })}>Add Count</button>
            <button onClick={() => dispatch({ type: 'substract', value: 2 })}>Reduce Count</button >
            <button onClick={() => dispatch({ type: 'reset' })}>Reset Count</button>

            <br />

            Second Counter : {count2.firstCounter}
            <button onClick={() => dispatch2({ type: 'add', value: 10 })}>Add Count</button>
            <button onClick={() => dispatch2({ type: 'substract', value: 10 })}>Reduce Count</button >
            <button onClick={() => dispatch2({ type: 'reset' })}>Reset Count</button>


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
    const [count2, dispatch2] = useReducer(reducer, initialState);

    // console.log('Count returned value',count);
    // console.log('initialState returned value',initialState);

    return (
        <div>
            <h1 className='info'>Complex Object level useReducer</h1>

            <h1>This component has a basics of the Reducer concepts.</h1>
            First Counter : {count.firstCounter}
            <button onClick={() => dispatch({ type: 'add', value: 2 })}>Add Count</button>
            <button onClick={() => dispatch({ type: 'substract', value: 2 })}>Reduce Count</button >
            <button onClick={() => dispatch({ type: 'reset' })}>Reset Count</button>

            <br />

            Second Counter : {count2.firstCounter}
            <button onClick={() => dispatch2({ type: 'add', value: 10 })}>Add Count 10</button>
            <button onClick={() => dispatch2({ type: 'substract', value: 10 })}>Reduce Count 10</button >
            <button onClick={() => dispatch2({ type: 'reset' })}>Reset Count</button>


            <p className='label'>We also have an option to pass extra parameters to the dispatch, please see the code on how to make use of the that....  <br/>In the below we used two useReducers functions to maintain different states and one state value will not interfere in other state value.</p>
            <div className='info2'>
                <b>
                    <div id='codeSnippetIdcomplexObjectUseReducer'></div>
                </b>
            </div>
        </div>
    )
}

export default codeSnippet(ChildReducerComplex, complexObjectUseReducer, 'codeSnippetIdcomplexObjectUseReducer');