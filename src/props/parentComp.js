import React from 'react'
import ChildClassComp from './childClassComp'
import ChildFuncComp from './childFuncComp'

function ParentComp() {

    let value = `Hey I'm a prop value in parent thinking that if get changed in parent component then the child components will be re-render but  since props are immutable I won't be changed`;
    function changeValue() {
        value = `New value`
    }

    return (
        <div>
            <h1>PROPS</h1>
            Parent Functional Component<br />
            <button onClick={changeValue}>Click to change value</button><br />
            {value}
            <br />
            <h2 className='info'>
                If we try to change the prop and think that child component will re-render since there is a change in value then it is not possible, Please refer below document which says when the child components will re-render, Follow below guide....
            </h2>
            <h3 className='info2'>
                Props also has the ability to provide the access to the parent's method to the child components.
                EX: We have a changeValue method in this (Parent component), when we pass it as a prop child component can consume it and can call the method if required.
            </h3>
            <p className='link'>
                <a href='https://www.developerway.com/posts/react-re-renders-guide'>Re-Render Guide</a>
            </p>
            <hr />
            Functional Component: <br />
            <ChildFuncComp name={`I'm a functional compo PROP`} value={value} changeValue={changeValue}></ChildFuncComp>
            <hr />
            Class Component: <br />
            <ChildClassComp name={`I'm a Class compo PROP`} value={value} changeValue={changeValue}></ChildClassComp>
        </div>
    )
}



export default ParentComp