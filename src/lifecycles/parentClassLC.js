import React, { Component } from 'react'
import ChildClassLC from './childClassLC'
import image from './lifecycle.png'
import image1 from './lifecycle2.png'

export class ParentClassLC extends Component {

    imageStyle = {
        width: '75%'
    }
    constructor() {
        super();
        console.log('Parent Constructor method');
        this.state = {
            name: 'Prudhvi'
        }
        this.inputRef = React.createRef();
    }

    changeState() {
        this.setState({
            name: this.inputRef.current.value
        })
    }


    render() {
        console.log('Parent Render Method');
        return (
            <div>
                <h1>LifeCycle Methods Class Component</h1>
                <img src={image} style={this.imageStyle} />
                <p>Source : <a href='https://medium.com/@ralph1786/intro-to-react-component-lifecycle-ac52bf6340c' target="_blank">Click Here</a></p><br />
                <img src={image1} style={this.imageStyle} />
                <p>Source : <a href='https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/' target="_blank">Click Here</a></p><br />


                
                <h3>Parent Component</h3>
                <h4>Check console logs for the method calls</h4>
                <div>
                    Current State name Value is : <b>{this.state.name}</b><br />
                    Enter a value and Submit to change state name value
                    <input type="text" ref={this.inputRef} /><br />
                    <button onClick={this.changeState.bind(this)}>Change State</button>
                </div>
                <hr />
                <ChildClassLC name="Prudhvi"></ChildClassLC>
            </div>
        )
    }

    componentDidMount() {
        console.log(`Parent ComponentDidMount, I will be called only after all Children's componentDidMount method is completed`);
    }

    shouldComponentUpdate(nextProps, nextState) {
        // This method will tell whether component should re-render or not
        // console.log(this.state.name,'---',nextState.name);
        console.log('Parent ShouldcomponentUPDATE method nextProps', nextProps);
        console.log('Parent ShouldcomponentUPDATE method nextState', nextState);


        // Comparing states to re-render 
        if (this.state.name === nextState.name) {
            console.log('Parent Both values are same, So do return false so that component will not re-render');
            return false;
        } else {
            console.log('Parent Both values are not same, So do return true to re-render the component');
            return true;
        }
    }

    
    componentDidUpdate(prevProps, prevState) {
        // We can make use of the prevProps and prevState properties and perform some side effects
        console.log('Parent componentDidUpdate method prevProps', prevProps);
        console.log('Parent componentDidUpdate method prevState', prevState);
        console.log('Parent componentDidUpdate method lifecycle...,');
    }

    componentWillUnmount(){
        console.log('This is triggered when component is removed from the DOM, it is useful for the cleanups');
    }
}

export default ParentClassLC;