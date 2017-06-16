import React, { Component } from 'react'

// componente baseado em classe

export default class ClassComponent extends Component {
  render() {
    return (
      <h1>{this.props.value}</h1>
    )
  }
}