import React, { Component } from 'react'

class Field extends Component {
  
  constructor(props){
    super(props)
    this.state = { value: props.initialValue }

    // this.state = { value: null }
    // a linha acima indica que o componente é uncontroled


    //indica que toda a chamada de handle change aponta para o metodo do componente
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  render(){
    return(
      <div>
        <label> {this.state.value} </label> <br/>
        <input onChange={this.handleChange} value={this.state.value} />
        
        {/*<input value={this.state.value} />*/}
        {/*
          sem o 'onChange' o componente se torna uncontroled
        */}
      </div>
    )
  }

}

export default Field
//outra forma de exportar o componente