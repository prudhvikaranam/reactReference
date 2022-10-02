import React, { Component } from 'react'

class Input extends Component {
    constructor(props) {
        super()
        this.inputRef = React.createRef();
    }

    // componentDidMount(){
    //     this.inputRef.current.focus()
    //     console.log('inputRef',this.inputRef);
    // }

    focusInput(){
        this.inputRef.current.focus();
    }

    alert(){
        alert('In Child');
    }

    render() {
        return (
            <div>
                <input type='text' ref={this.inputRef} />
                <button onClick={this.focusInput.bind(this)}>Focus</button>
            </div>
        )
    }
}

export default Input