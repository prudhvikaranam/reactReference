import React, { Component } from 'react'
import FwInputRef from './fwInputRef'

class FwParentRef extends Component {
    constructor() {
        super()
        this.ref = React.createRef();
    }

    fwdRefMethod() {
        console.log(this.ref);
        this.ref.current.focus();
    }
    render() {
        return (
            <div>
                <h1>Forwarding Ref.....</h1>
                <p>This is a Parent forward red inputInput</p>
                <button onClick={this.fwdRefMethod.bind(this)}>Pass ref to func comp</button>
                <hr />
                <p>Child Forward Red Input</p>
                <FwInputRef ref={this.ref}/>
            </div>
        )
    }
}

export default FwParentRef