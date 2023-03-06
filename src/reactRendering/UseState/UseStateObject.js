import React, { useEffect, useState } from 'react'

const initialValue = {
  fName: "John",
  lName: "Doe"
}

const UseStateObject = () => {

  const [person, setPerson] = useState(initialValue)

  console.log('Use state object COMPONENT called');

  useEffect(() => {
    // console.log('Useeffect called', person);
  }, [person])


  const changeName = () => {
    // ---------------Below will mutate the original object as well
    // person.fName = "William";
    // person.lName = "Smith";
    // setPerson(person);
    // console.log('Object state render Person', person, 'Object state render initialValue', initialValue);
    // // In the above case we are changing  directly the person which is been referred to the initialValue variable, hence even the initialValue will also be updated and when it is compared using Object.is method it will be true hence component will not re-render again (Hence values are also not getting updated in UI)
    // console.log('Object.is', Object.is(initialValue, person));





    const newPerson = { ...person }
    newPerson.fName = "William";
    newPerson.lName = "Smith";
    setPerson((prevValue) => {
      // console.log('Prev value', prevValue);
      // console.log('prevValue', prevValue, 'Person', newPerson);
      // console.log('Comparision',JSON.stringify(prevValue) === JSON.stringify(newPerson))
      if (JSON.stringify(prevValue) != JSON.stringify(newPerson)) {
        return newPerson
      } else {
        return prevValue;
      }
    })
    // console.log('initialValue', initialValue, 'Person', newPerson);
  }
  return (
    <>
      <div>UseState for Object</div><br />
      <button onClick={() => { changeName() }}>{person.fName} {person.lName}</button>
    </>
  )
}

export default UseStateObject