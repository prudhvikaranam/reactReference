import React, { Component } from 'react'

class ChildStateFunctional extends Component {
    render() {
        console.log('Child component loaded since some state changed in parent component called');
        return (
            <div>
                Child Functional Component......
                ChildStateFunctional(useState())
            </div>
        )
    }
}

export default ChildStateFunctional