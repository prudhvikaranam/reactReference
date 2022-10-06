import React, { Component } from 'react'
import ChildError from './ChildError';
import ErrorBoundary from './ErrorBoundary';

export class ParentError extends Component {
    constructor() {
        super();
    }


    render() {
        return (
            <div>
                We have few life cycle hooks which helps us in catching the errors...
                <h3 className='info'>Create a new component which has <b>static getDerivedStateFromError(error)</b> lifecycle method, and this component helps to catch the error....</h3>
                <p className='cons'>Error boundaries cathes errors only in lifecycles and constructore method, i.e., if we try to catch the error on event handlers using the error boundary concpets it won't work.</p>
                <br />
                <hr />
                <ErrorBoundary>
                    <ChildError heroName='Thor'></ChildError>
                </ErrorBoundary>
                <ErrorBoundary>
                    <ChildError heroName='Hulk'></ChildError>
                </ErrorBoundary>
                <ErrorBoundary>
                    <ChildError heroName='Iron Man'></ChildError>
                </ErrorBoundary>
                <ErrorBoundary>
                    <ChildError heroName='Joker'></ChildError>
                </ErrorBoundary>
            </div>
        )
    }
}

export default ParentError