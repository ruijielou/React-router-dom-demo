import React, { Component } from 'react'

class Topic extends Component {
    constructor(props) {
        super(props)
    }
  render() {
      
    return (
      <div>
        <h3>{JSON.stringify(this.props.match)}</h3>
      </div>
    );
  }
}
export default Topic
