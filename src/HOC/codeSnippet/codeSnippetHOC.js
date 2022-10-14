import React, { Component } from "react";

const codeSnippet = ((OriginalComponent, code) => {
    class NewComponent extends Component {
        constructor(props) {
            super(props);
        }

        componentDidMount() {
            document.getElementById('codeSnippetId').innerHTML = code
        }
        render() {
            return <OriginalComponent></OriginalComponent>
        }
    }
    return NewComponent
})

export default codeSnippet;