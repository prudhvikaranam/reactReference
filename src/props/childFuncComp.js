import React from 'react'

function ChildFuncComp(props) {

    function changePropValue() {
        props.changeValue();
    }
    return (
        <div>
            {props.name}<br />
            <p className='cons' onClick={changePropValue}>{props.value}</p>
        </div>
    )
}

export default ChildFuncComp