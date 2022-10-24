import React from 'react'
import ChildReducer from './ChildReducer'
import codeSnippet from './../../HOC/codeSnippet/codeSnippetHOC';
import ChildReducerComplex from './ChildReducerComplex';

const useReducerBasicCode = `
const intialCount = 0;

const reducer = (state, action) => {
    \u00a0switch (action) {
        \u00a0\u00a0 case 'add':
        \u00a0\u00a0\u00a0\u00a0 return state + 1; 
        \u00a0\u00a0\u00a0\u00a0 // *************What ever we are returning here will be returned into the count variable declared below, We are not returning into the actual initialCount variable, At the time of initialization (first time load) since we are passing the intialCount into the useReducer function we are able to access and display the count. And the state which we are using in this reducer function will hold the updated value but the initialCount will not be updated actually*************//
        \u00a0\u00a0 case 'substract':
        \u00a0\u00a0\u00a0\u00a0 return state - 1;
        \u00a0\u00a0 case 'reset':
        \u00a0\u00a0\u00a0\u00a0 return intialCount;
        \u00a0\u00a0 default:
        \u00a0\u00a0\u00a0\u00a0 return state;
    \u00a0}
}

const [count, dispatch] = useReducer(reducer, intialCount);

return (
    <div>
        ChildReducer
        <h1>This component has a basics of the Reducer concepts.</h1>
        Count : {count}
        <button onClick={() => dispatch('add')}>Add Count</button>
        <button onClick={() => dispatch('substract')}>Reduce Count</button >
        <button onClick={() => dispatch('reset')}>Reset Count</button>
    </div>
);`


function ParentReducer(props) {
    return (
        <div>
            <ChildReducerComplex />


            <hr />
            ParentReducer

            <h2 className='info2'>
                <span className='label'>First Step </span>: Create a Reducer using <b>useReducer(reduceFn,initialState)</b>;<br />
                <span className='label'>Second Step </span> : Create a reduceFn function which takes two parameters <b>reduceFn(state,action)</b>;<br />
                <span className='label'>Third Step </span> : useReducer function array with two elements where first one will be the returned value which we modified (state) in reduceFn function and second one is the dispatch which is the action which we want to perform.
                <b>const [someValue,dispatch] = useReducer(reduceFn,initialState)</b>
                Below is small and basic example on how to implement useReducer;
                <hr />
                <b>
                    <div id='codeSnippetIduseReducerBasicCode'></div>
                </b>
            </h2>
            <hr />
            <ChildReducer /><hr />

        </div>
    )
}

export default codeSnippet(ParentReducer, useReducerBasicCode,'codeSnippetIduseReducerBasicCode');