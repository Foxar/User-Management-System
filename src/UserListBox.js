//UserListBox.js
import React, { Component } from 'react';
import axios from 'axios';
import UserList from './UserList';
import style from './style';


class UserListBox extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
    this.loadUsersFromServer = this.loadUsersFromServer.bind(this);
  }

  loadUsersFromServer() {
    axios.get(this.props.url).then(res => {
      this.setState({ data: res.data});
    })
  }

  componentDidMount() {
  this.loadUsersFromServer();

}

  render() {
    return (
      <div style={style.userListBox}>
        <h2 style={style.userListTitle }>Users:</h2>
      <UserList
          data={ this.state.data }
          onUserDelete = { this.props.onUserDelete }
          onUserUpdate = { this.props.onUserUpdate }/>

      </div>
    )
  }
}

export default UserListBox;
