import React, { Component, PureComponent } from 'react'
import ClassNonPureChildComponent from './ClassNonPureChildComponent';
import ClassPureChildComponent from './ClassPureChildComponent'

class ClassParentComponent extends Component {
    constructor() {
        super();
        this.state = {
            name: 'John Doe'
        }
    }
    render() {
        return (
            <div>
                <h1>ClassParentComponent</h1>
                <h3 >Pure Components in React are the components which do not re-renders when the value of state and props has been updated with the same values.</h3> <br />
                <h3 className='info'>
                    Pure Components follow shallow comparision that means (Equality ===), for strings and numbers it compares the values but for objects it compares the references instead of the values..
                </h3>
                <button onClick={() => { this.setState({ name: 'John Smith' }) }}>Change Value</button>
                <button onClick={() => { this.setState({ name: 'John Doe' }) }}>Don't Change Value</button>

                <hr />
                <div>
                    <p>Below is the Pure component as it extends PureComponent (Should be imported from React)</p>
                    <ClassPureChildComponent name={this.state.name} />
                </div>

                <hr />
                <div>
                    <p>Below is the NON Pure component..</p>
                    <ClassNonPureChildComponent name={this.state.name} />
                </div>
            </div>
        )
    }
}

export default ClassParentComponent;