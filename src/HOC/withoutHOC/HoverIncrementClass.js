import React, { Component } from 'react'

export class HoverIncrementClass extends Component {

    constructor(props) {
        super(props);
        this.state = {
            incrementedTimes: 0
        }
    }

    increment() {
        this.setState({
            incrementedTimes: this.state.incrementedTimes + 1
        });
    }


    render() {
        return (
            <div>
                HoverIncrementClass<br />
                <p onMouseEnter={this.increment.bind(this)}>You Clicked me {this.state.incrementedTimes}</p>
            </div>
        )
    }
}

export default HoverIncrementClass