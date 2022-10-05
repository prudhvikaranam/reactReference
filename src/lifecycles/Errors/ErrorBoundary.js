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
    render() {
        if (this.state.hasError) {
            return 'Somethign went Wrong, Looks like he is not an hero'
        } else {
            return this.props.children 
        }
    }
}

export default ErrorBoundary