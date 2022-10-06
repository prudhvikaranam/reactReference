import React, { Component } from 'react'
import EnhancedComponentHOC from './EnhancedComponentHOC';

export class ButtonIncrementHOC extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log('PROPS', this.props);
        const { count, increment } = this.props;
        return (

            <div>
                ButtonIncrementHOC<br />
                <button onClick={increment}>Clicked me {count} times</button>
            </div>
        )
    }
}

export default EnhancedComponentHOC(ButtonIncrementHOC)