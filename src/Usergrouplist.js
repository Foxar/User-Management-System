//UsergroupList.js
import React, { Component } from 'react';
import Usergroup from './Usergroup';
import style from './style';

class UsergroupList extends Component {
  render() {

    let userNodes = this.props.data.map(usergroup => {
      return (
        <li>
        <Usergroup
        usergroupObj = {usergroup}
        name={ usergroup.name}
        key={ usergroup.id }
        onUsergroupDelete = {this.props.onUsergroupDelete}
        />
        </li>
      )
    })

    return (
      <div style={ style.List }>
      <ul>
        { userNodes }
      </ul>
      </div>
    )
  }
}

export default UsergroupList;
