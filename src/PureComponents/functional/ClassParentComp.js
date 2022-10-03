import React, { Component } from 'react'
import FunctionalPureChildComp from './FunctionalPureChildComp';

export class ClassParentComp extends Component {
  constructor() {
    super();
    this.state = {
      name: 'John Doe'
    }
  }
  render() {
    return (
      <div>
        <h2>ClassParentComp</h2>
        <h3 className='info'>Components with MEMO in React are the components which do not re-renders when the value of state and props has been updated with the same values.</h3>
        <p>This is Parent Class component used to demonstrate the MEMO process, Here Parent component is the Class component and child component is the functional component...</p>
        <h4 className='info2'>PURE components are for the CLASS components and MEMO's are for the functional components..</h4>
        <button onClick={() => { this.setState({ name: "John Smith" }) }}>Change Value</button>
        <button onClick={() => { this.setState({ name: 'John Doe' }) }}>Don't Change Value</button>
        <hr />
        <FunctionalPureChildComp name={this.state.name} />
      </div>
    )
  }
}

export default ClassParentComp