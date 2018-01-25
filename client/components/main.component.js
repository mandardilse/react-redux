import React, { Component } from 'react'

export default class Main extends Component {
  componentDidMount() {
    this.props.FETCHPOSTDATA();
  }
  render() {
    return (
      <div className="container">
        <p>Main component</p>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
}
