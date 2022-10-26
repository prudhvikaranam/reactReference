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
            ParentReducer (Mostly for Local State Mangement)
            <br />Reducers helps us in state mangement<br/>
            <b className='info2'>Mostly useState and useReducer does the same work i.e., State Management.<br /><br />
            Use Case Recommendations.</b>
            <br /><br />
            <table>
                <tr>
                    <th>useState </th>
                    <th>useReducer</th>
                </tr>
                <tr>
                    <td>Primitive Types (String,number,booleans)</td>
                    <td>Objects, Arrays</td>
                </tr>
                <tr>
                    <td>When less number of State Transistions<br/>Mostly 1 to 3 setState() 's</td>
                    <td>When more than 2 or 3 setState() 's</td>
                </tr>
                <tr>
                    <td>When there are NO related Transistions</td>
                    <td>When Related Transistions</td>
                </tr>
                <tr>
                    <td>No Business Logic</td>
                    <td>Complex Business Logic</td>
                </tr>
                <tr>
                    <td>Local State</td>
                    <td>Global State</td>
                </tr>
            </table>

            <h2 className='info2'>
                <span className='label'>First Step </span>: Create a Reducer using <b>useReducer(reduceFn,initialState)</b>;<br />
                <span className='label'>Second Step </span> : Create a reduceFn function which takes two parameters <b>reduceFn(state,action)</b>;<br />
                <span className='label'>Third Step </span> : useReducer function array with two elements where first one will be the returned value which we modified (state) in reduceFn function and second one is the dispatch which is the action which we want to perform.
                <b>const [someValue,dispatch] = useReducer(reduceFn,initialState)</b><br />
                Below is small and basic example on how to implement useReducer;
                <hr />
                <b>
                    <div id='codeSnippetIduseReducerBasicCode'></div>
                </b>
            </h2>
            <hr />
            <ChildReducer /><hr />
            <ChildReducerComplex />


            <hr />

        </div>
    )
}

export default codeSnippet(ParentReducer, useReducerBasicCode, 'codeSnippetIduseReducerBasicCode');