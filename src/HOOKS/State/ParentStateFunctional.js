import React, { useState } from 'react'
import ChildStateFunctional from './ChildStateFunctional'
import image from './stateSummary.png';
function ParentStateFunctional() {
    console.log('ParentStateFunctional called');
    let imageStyle = {
        width: '50%'
    }

    let stateObjectVar = {
        currentState: 'Telangana',
        currentCountry: 'India'
    }

    let stateArrayVar = [0, 1, 2, 3, 4, 5];

    const [name, changeNameState] = useState('Prudhvi');
    const [stateObject, changeStateObject] = useState(stateObjectVar);
    const [stateArray, changeStateArray] = useState(stateArrayVar);


    const changeNameMethod = () => {
        // changeNameState(() => {
        //     return 'Prudhvi Teja Karanam'
        // })
        changeNameState('Prudhvi Teja Karanam');
    }
    const changeNameMethodPrev = () => {
        changeNameState((prevValue) => {
            console.log('Prev Value', prevValue);
            return `${prevValue} Teja Karanam`
        })
    }

    const changeObjectMethod = () => {
        console.log(stateObject);
        changeStateObject(() => {
            return { ...stateObject, currentState: 'Karnataka' }
        })

    }
    const changeObjectMethodError = () => {
        changeStateObject(() => {
            return { currentState: 'Karnataka' }
        })
    }

    const changeArrayMethod = () => {
        changeStateArray(() => {
            return [...stateArray, 6]
        })
    }
    return (
        <div>
            ParentStateFunctional (useState()) <br />
            Intial State Name : <b>{name}</b><br />
            <button onClick={changeNameMethod}>Change to full Name</button><br />
            <button onClick={changeNameMethodPrev}>Change to full Name using prevValue</button>
            <p className='cons'>If prevValue and the new value which we are trying to update is same then the change method will compare both the values using the internal mechanism/alogrithm and will not update the new value</p>

            <h2 className='info2'><b>Changing objects</b></h2>
            <div className='info2'>Changing objects works bit different, if we try to change/update a object property inside an object it will replace the entire object.</div>
            <b>Working Example</b>&nbsp;<button onClick={changeObjectMethod}>Change Object State</button><br />
            <b>Not Working Example</b>&nbsp;<button onClick={changeObjectMethodError}>Change Object State (Not work)</button>

            <p>Object example : {JSON.stringify(stateObject)}</p>

            <h2 className='info2'><b>Changing Arrays</b></h2>
            <div className='info2'>Even Arrays work in the similar way os objects.</div>
            <b>Working Example</b>&nbsp;<button onClick={changeArrayMethod}>Change Array State</button><br />

            Array = {stateArray}<br /><br />


            <h1>Guide</h1>
            <h1 className='info'>When there is a change in the state then the entire function gets called</h1>
            <img src={image} style={imageStyle} />
            <hr />
            <ChildStateFunctional />
        </div>
    )
}

export default ParentStateFunctional;