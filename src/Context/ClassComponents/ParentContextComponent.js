import React, { Component } from 'react'
import { UserProvider } from './BasicUserContext'
import ComponentA from './ComponentA'

export class ParentContextComponent extends Component {
  render() {
    return (
      <div>
        ParentContextComponent
        <h3 className='info2'>
          <b>Context: </b>Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language.
          Context provides a way to pass data through the component tree without having to pass props down manually at every level.<br />
          <b>Provider: </b>to get the elements access to the contexts and state we need to wrap the elements in the provider.<br />
          <b>NOTE:</b>Context/state will not be available for the components where we wrap the provide, it will be available only for the components inside the provider wrapper

        </h3>
        <hr />
        <UserProvider value='Prudhvi Teja Karanam'>
          <ComponentA></ComponentA>
        </UserProvider>
      </div>
    )
  }
}

export default ParentContextComponent