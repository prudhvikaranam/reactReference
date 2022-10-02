import React, { Component } from 'react'

class ChildClassComp extends Component {
    // componentDidUpdate(){
    //     console.log(this.props);
    // }

    render() {
    return (
      <div>
        {this.props.name}<br />
        <p className='cons'>{this.props.value}</p>
      </div>
    )
  }
}

export default ChildClassComp