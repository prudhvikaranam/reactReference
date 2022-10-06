import React, { Component } from 'react'
import EnhancedComponentHOC from './EnhancedComponentHOC';

export class HoverIncrementHOC extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { count, increment } = this.props;
        return (
            <div>
                HoverIncrementHOC<br />
                <p onMouseEnter={increment}>Hovered me {count} times</p>
            </div>
        )
    }
}

export default EnhancedComponentHOC(HoverIncrementHOC)