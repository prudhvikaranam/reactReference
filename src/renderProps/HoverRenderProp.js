import React, { Component } from 'react'

export class HoverRenderProp extends Component {
    render() {
        return (
            <div>
                Hover RenderProp Component<br />
                My Name : <b>{this.props.name()}</b><br />
                Counter : {this.props.counter}<br />
                <p onMouseEnter={this.props.incrementCounter}>Increment Counter</p>
            </div >
        )
    }
}

export default HoverRenderProp