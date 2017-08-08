//UserList.js
import React, { Component } from 'react';
import User from './User';
import style from './style';

class UserList extends Component {
  render() {

    let userNodes = this.props.data.map(user => {
      return (
        <li>
        <User
          userObj = {user}
          username={ user.username }
          key={ user.id }
          onUserDelete = { this.props.onUserDelete }
          onUserUpdate = { this.props.onUserUpdate }/>
        </li>
      )
    })

    return (
      <div style={ style.List }>
      <ul style={ style.ul }>
        { userNodes }
      </ul>
      </div>
    )
  }
}

export default UserList;
