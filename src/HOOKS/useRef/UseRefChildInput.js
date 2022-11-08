import React, { useEffect, useRef } from 'react'

function UseRefChildInput() {
    const inputRef = useRef(0);
    useEffect(() => {
        inputRef.current.focus();
    }, [])
    return (
        <>
            <div>UseRefChildInput</div>

            <input ref={inputRef} type='text' />
        </>
    )
}

export default UseRefChildInput