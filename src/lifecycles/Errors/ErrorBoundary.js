import React, { Component } from 'react'

export class ErrorBoundary extends Component {
    constructor(props) {
        super()
        this.state = {
            hasError: false
        }
    }
    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }
    componentDidCatch(error,info){
        console.log('Error --->',error);
        console.log('Info  --->',info);
    }
    render() {
        if (this.state.hasError) {
            return <h1>Something went Wrong, Looks like he is not an hero</h1>;
        } else {
            return this.props.children 
        }
    }
}

export default ErrorBoundary