import React, {Component} from 'react';
import PropsComp from './PropsComp.js';
import './App.css';

class TestThree extends Component{
  constructor(){
    super()
      this.state = {
        array:[],
        fjson:{}
      }

  }
  onClick(){
    const fname = this.refs.name.value
    const femail = this.refs.email.value
    const ftelephone = this.refs.telephone.value
    this.state.fjson = {}
    this.state.fjson['name'] = fname
    this.state.fjson['email'] = femail
    this.state.fjson['mbl'] = ftelephone
    const newArray = this.state.array.push(this.state.fjson)
    console.log(JSON.stringify(this.state.array));
    this.setState({
      array: this.state.array,
      fjson: this.state.fjson
    })
  }
  render(){
    const {array, fjson} = this.state
    return(
      <div class name = "TestThreeCSS">
      <table>
      <tr>
      <td>Name: </td>
      <td><input type='text' ref='name' required/> </td>
      </tr>
      <tr>
      <td>Telephone_Number: </td>
      <td><input type='text' ref='telephone' required/> </td>
      </tr>
      <tr>
      <td>Email: </td>
      <td> <input type='email' ref='email' required/> </td>
      </tr>
      <tr>
      <td> </td>
      <td><button type="button" onClick={this.onClick.bind(this)}> Submit</button></td>
      </tr>
      </table>
      <PropsComp data={array} />
      </div>
    );
  }

}

export default TestThree;
