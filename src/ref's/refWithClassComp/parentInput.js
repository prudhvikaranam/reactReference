import React, { Component } from 'react'
import Input from './input'

class ParentInput extends Component {
    constructor(props){
        super()
        this.parentInputRef = React.createRef();
    }

    // componentDidMount(){
    //     console.log('Parent',this.parentInputRef);
    // }

    parentFocus(){
        this.parentInputRef.current.alert();
        this.parentInputRef.current.focusInput();

    }
    render() {
        return (
            <div>
                <h2>Helps us to directly access the DOM nodes in REACT</h2>
                <p>This is a ParentInput</p>
                <button onClick={this.parentFocus.bind(this)}>Focus Child Input From Parent</button>
                <hr />
                <p>Child Input</p>
                <Input ref= {this.parentInputRef}/>
            </div>
        )
    }
}

export default ParentInput