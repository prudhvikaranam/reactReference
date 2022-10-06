import React, { Component } from 'react'

export class ButtonIncrementClass extends Component {
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
                ButtonIncrementClass<br />
                <button onClick={this.increment.bind(this)}>You Clicked me {this.state.incrementedTimes}</button>
            </div>
        )
    }
}

export default ButtonIncrementClass