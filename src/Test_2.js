import React, { Component } from 'react';
import PropsComp from './PropsComp.js'

class Test_2 extends  Component{
  constructor(){
    super()
    this.state ={
      array: []
    }
  }
  onClick(){
    const inputValue = this.refs.inputRef.value
    const newArray = this.state.array.push(inputValue)
    //  console.log(this.state.array.push(inputValue))
    this.setState({
      array: this.state.array

    })

  }

  render() {
    const {array } = this.state
    console.log(array)
  //  const renderArray = array.map(function(item){ return <tr><td>{item}</td></tr>})
    return (
      <div>
    <button type="button" onClick={this.onClick.bind(this)}>Add to the list</button>
    <input type='text' ref='inputRef'/>
  //  <table>{renderArray}</table>
  <PropsComp data ={array} />
      </div>
    );
  }
}

export default Test_2;
