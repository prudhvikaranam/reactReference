import React, { Component } from 'react'

class ClassNonPureChildComponent extends Component {
    render() {
        console.log('ClassNonPureChildComponent render method called');
        return (
            <>
            <div>
                ClassNonPureChildComponent
                {this.props.name}
            </div>
            </>

        )
    }
}

export default ClassNonPureChildComponent