import React, { Component } from 'react'
import EnhancedReferSourceCompo from './referSourceHOC';
import ButtonIncrementHOC from './withHOC/ButtonIncrementHOC';
import HoverIncrementHOC from './withHOC/HoverIncrementHOC';
import ButtonIncrementClass from './withoutHOC/ButtonIncrementClass'
import HoverIncrementClass from './withoutHOC/HoverIncrementClass'

export class ParentClassCompHOC extends Component {
  constructor(props){
    super(props);
  }
  render() {
    console.log('Refer PROPS',this.props);
    return (
      <div>
        {this.props.title}
        <p>Source Link : <a href={this.props.link} target='_blank'>Refer Link</a></p>
        <hr />
        <div>
          Components without HOC functionality...In this, we have same methods with same logic on both the components.
          <ButtonIncrementClass></ButtonIncrementClass>
          <HoverIncrementClass></HoverIncrementClass>
        </div><hr />
        <div>
          Components with HOC functionality...In this, we have create a new file which has the common logic and this has been used in the other two components...
          <p className='info2'>If we are taking the help of the HOC component,Even the props which we pass directly to the component will not be available, those will be available in the enhanced component file where we can destructure and pass them to the component....</p>
          <ButtonIncrementHOC name= "IRONMAN"></ButtonIncrementHOC>
          <HoverIncrementHOC></HoverIncrementHOC>
        </div>
      </div>
    )
  }
}

export default EnhancedReferSourceCompo(ParentClassCompHOC,'HOC : Higher Order functions are helpful for code','https://www.geeksforgeeks.org/react-js-higher-order-components/');