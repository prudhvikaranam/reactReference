import React, { Component } from "react";

const codeSnippet = ((OriginalComponent, code) => {
    class NewComponent extends Component {
        constructor(props) {
            super(props);
        }

        componentDidMount() {
            document.getElementById('codeSnippetId').innerText = code;
        }
        render() {
            return <OriginalComponent someProps= "This can be used in the components as PROPS"></OriginalComponent>
        }
    }
    return NewComponent
})

export default codeSnippet;