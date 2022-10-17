import React from 'react'
import codeSnippet from '../../../HOC/codeSnippet/codeSnippetHOC';
import ChildComponentA from './ChildComponentA'
import userContext from './Context';
const contextCodeSnippet = ` 
create Context ::::::::::::::::::::::

export const userContext = React.createContext();



Provide Provider ::::::::::::::::::::::

<userContext.Provider value={'Prudhvi Teja Karanam'}>
  <ChildComponentA />
</userContext.Provider>



In the component where we want to consumer, give a consumer ::::::::::::::::::::::

<userContext.Consumer>
    {(user) => {
        return <div>User name : {user}</div>
    }}
</userContext.Consumer>


******************************If we have multiple Context's******************************
create Context ::::::::::::::::::::::

export const userContext = React.createContext();
export const userLocationContext = React.createContext();



Provide Provider's ::::::::::::::::::::::
<userContext.Provider value={'Prudhvi Teja Karanam'}>
  <userLocationContext.Provider value={"Hyderabad"}>
    <ChildComponentA />
</userLocationContext.Provider>
</userContext.Provider>


In the component where we want to consumer, We can make use of useContext(ContextName) ((((((We can use in the case of single Context Consumer:::::::::No Need of providing <.Consumer> also)))))):::::::::::::

const userName = useContext(userContext);
const userLocation = useContext(userLocationContext)

<div>
    <div>User Name is <b>{userName}</b> and he is from <b>{userLocation}</b></div>
</div>

`
export const userLocationContext = React.createContext();
function ParentContextFucntional() {

  return (
    <div>
      ParentContextFucntional

      <hr />

      <userContext.Provider value={'Prudhvi Teja Karanam'}>
        <userLocationContext.Provider value={"Hyderabad"}>
          <ChildComponentA />
        </userLocationContext.Provider>
      </userContext.Provider>





      <hr />
      <h1>Guide</h1>
      <p className='info2'>React Context is a way to manage state globally. It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.</p>
      <p className='info2'>In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>
      <h1>Implementation</h1>
      <b><div id='codeSnippetId'></div></b>

    </div>
  )
}

export default codeSnippet(ParentContextFucntional, contextCodeSnippet)