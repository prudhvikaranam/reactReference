import React, { useMemo, useState } from 'react'
import UseMemoButton from './UseMemoButton';
import UseMemoChildA from './UseMemoChildA';
import UseMemoChildB from './UseMemoChildB';


function UseMemoParent() {
    const [countA, setIncrementA] = useState(0);
    const [countB, setIncrementB] = useState(0);

    const incrementA = () => {
        return setIncrementA(countA + 1)
    }

    const incrementB = () => {
        setIncrementB(countB + 2)
    }


    const isEven = useMemo(() => {
        return countA % 2 === 0 // This function won't be triggered until the CountA is changed.
    },[countA]);

    // console.log('--->',isEven); // This returns a value

    return (
        <>
            <div>UseMemoParent
                <h1 className='info'>Performance optimization hook</h1>
                
                <h2 className='info2'>
                    If there is a method which has a high performace code and we don't want to trigger that function until a specific state is changed in that case we can inject that state as dependency to useMemo hook and stop executing that function until that dependency is changed.<br/>
                    It is not recommended to pass the function inside the useMemo callback and it returns in infinite loop<br />
                    We should only be returning a value from useMemo callback.
                </h2>
            </div>

            <span>{isEven ? 'Even' : 'Odd'}</span>
            <hr />
            UseMemo child A
            <UseMemoChildA countA={countA}></UseMemoChildA>
            <UseMemoButton incrementCount={incrementA} forComponent={"from  Component A"}>Increment A</UseMemoButton>
            <hr />
            UseMemo child B

            <UseMemoChildB countB={countB}></UseMemoChildB>
            <UseMemoButton incrementCount={incrementB} forComponent={"from  Component B"}>Increment B</UseMemoButton>
        </>
    )
}

export default UseMemoParent