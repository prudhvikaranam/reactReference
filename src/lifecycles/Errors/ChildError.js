import React, { Component } from 'react'

export class ChildError extends Component {
  constructor(props) {
    super();
  }

  render() {
    if (this.props.heroName === 'Joker') {
      throw new Error();
    } else {
      return (
        <div>
          <br />
          Hero Name : {this.props.heroName}
        </div>
      )
    }
  }
}

export default ChildError

