import React, { Component } from 'react';

class Test extends Component {
  constructor(){
    super()
    this.state = {
      number: 0,
      name: 'Name',
      array: [0,1,2]
    }
  }

  decrement(){
    const decrementNum = this.state.number - 1
    this.setState({
      number: decrementNum
    })
  }

  increment(){
    const incrementNum = this.refs.inputRef.value
    this.setState({
      number: incrementNum
    })
  }

  render() {
    const { number, array } = this.state
    const renderArray = array.map(function(item){ return <tr><td>{item}</td></tr>})
    return (
      <div style={{ margin: 50}}>
      //  <span onClick={this.decrement.bind(this)}  style={{ width: 25, height: 25, margin: 2, display: 'inline-block', borderColor: '#DDD', borderWidth: 1, borderStyle: 'solid' }}>-</span>
      //  <span onClick={this.increment.bind(this)}  style={{ width: 25, height: 25, margin: 2, display: 'inline-block', borderColor: '#DDD', borderWidth: 1, borderStyle: 'solid' }}>+</span>
        <button type="button" onClick={this.onClick}>Add to the list</button>
    //   <span style={{ width: 25, height: 25, margin: 2, display: 'inline-block', borderColor: '#DDD', borderWidth: 1, borderStyle: 'solid' }}>
      //  {number}
      </span>
      <input type='text' ref='inputRef'/>
      <table>{renderArray}</table>
      <h1>hi from test </h1>
    </div>
    );
  }
}

export default Test;
