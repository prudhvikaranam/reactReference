import React, { Component } from "react";

const codeSnippet = ((OriginalComponent, code, id) => {
    class NewComponent extends Component {
        constructor(props) {
            super(props);
        }

        componentDidMount() {
            document.getElementById(id).innerText = code;

        }
        // componentDidUpdate() {
        //     document.getElementById(id).innerText = code;
        // }
        render() {
            return <OriginalComponent someProps="This can be used in the components as PROPS"></OriginalComponent>
        }
    }
    return NewComponent
})

export default codeSnippet;