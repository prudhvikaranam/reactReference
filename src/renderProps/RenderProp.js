import React, { Component } from 'react'

export class RenderProp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }
    incrementCounter = () => {
        this.setState((prevState) => {
            return {
                counter: prevState.counter + 1
            }
        })
    }
    render() {
        return (
            <div>
                {this.props.render(this.state.counter, this.incrementCounter)}
                {/* Below method is via using this.props.children */}
                {/* {this.props.children(this.state.counter, this.incrementCounter)} */}
            </div>
        )
    }
}

export default RenderProp