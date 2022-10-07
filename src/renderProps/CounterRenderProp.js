import React, { Component } from 'react'

class CounterRenderProp extends Component {
    render() {
        console.log('props', this.props);
        return (
            <div>
                CounterRenderProp Component<br />
                My Name : <b>{this.props.name()}</b><br />
                Counter : {this.props.counter}<br />
                <button onClick={this.props.incrementCounter}>Increment Counter</button>
            </div>
        )
    }
}

export default CounterRenderProp