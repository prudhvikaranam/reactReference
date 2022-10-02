import React, { Component } from 'react'
import ChildFuncComp from './ChildFuncComp';

 class ParentClassComp extends Component {
    constructor(){
        super();
        this.state = {
            name : `Hey I'm a State in Parent Class component`,
            title : `Hey I'm just a random property in the same class parent state and getting passed to Child component, Even if there is a change in any property of the state, My element won't be re-rendered as I'm not getting updated directly only the elements whose value is updating will be re-rendered.`
        }
    }
    parentChangeState(){
        this.setState({
            name : `Hey I'm the new state value, I will get updated in Parent component where it is changed and also in the child component where I got passed as a PROP.`
        })
    }
  render() {
    return (
      <div>
        <h1>States</h1>
        <h2>{this.state.name}</h2>
        {/* <button onClick={this.parentChangeState.bind(this)}>Change State Name</button> */}
        <button onClick={() => {this.parentChangeState()}}>Change State Name</button>
        <hr />
        <ChildFuncComp state = {this.state}></ChildFuncComp>
      </div>
    )
  }
}

export default ParentClassComp