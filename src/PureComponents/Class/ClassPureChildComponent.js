import React, { PureComponent } from 'react'

export default class ClassPureChildComponent extends PureComponent {
    constructor(props) {
        super();
    }
    render() {
        console.log('ClassPUREChildComponent render method called');
        return (
            <>
                <div>ClassPureChildComponent</div>
                <h3>{this.props.name}</h3>
            </>
        )
    }
}
