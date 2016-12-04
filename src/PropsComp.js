import React, { Component } from 'react';
import './App.css';

class PropsComp extends Component {

  constructor(){
    super()
      this.state = {

      }

  }
  render() {
    const{data} = this.props;
    const renderArray = data.map(function(item){return <tr><td>{item.name}</td><td>{item.email}</td><td>{item.mbl}</td></tr>});
    return (
      <div><table>
        <thead><tr><td>Full Name</td><td>Email</td><td>Mobile Number</td></tr></thead>
        <tbody>{renderArray}</tbody>
        </table>

      </div>
    );
  }
}

export default PropsComp;
