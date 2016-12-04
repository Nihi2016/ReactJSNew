import React, { Component } from 'react';


class Test extends Component {
  constructor(){
    super()
    this.state = {
      number: 0,
      name: 'Name'
    }
  }
  decrement(){
  const decrementNum = this.state.number - 1
    this.setState({
    //  number: this.state.number - 1
    number: decrementNum
  })
  }
  render() {
    const { number, name} = this.state
    return (
      <div style ={{ margin: 50}}>
       <span onClick = {this.increment.bind(this)} style ={{ width: 25, height:25, margin:2, display:'inline-block'}}
       {this.state.number}
      </div>
    );
  }
}

export default Header;
