//UsergroupBox.js
import React, { Component } from 'react';
import axios from 'axios';
import UsergroupList from './Usergrouplist';
import style from './style';


class UsergroupBox extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
    this.loadUsergroupsFromServer = this.loadUsergroupsFromServer.bind(this);
    this.deleteUsergroup = this.deleteUsergroup.bind(this);
  }

  loadUsergroupsFromServer() {
    axios.get(this.props.url).then(res => {
      this.setState({ data: res.data});
    })
  }

  componentDidMount() {
  this.loadUsergroupsFromServer();
  setInterval(this.loadUsergroupsFromServer, this.props.pollInterval);
}

deleteUsergroup() {

}

  render() {
    return (
      <div style={style.userListBox}>
        <h2>Usergroups:</h2>
      <UsergroupList
       data={ this.state.data }
       onUsergroupDelete = {this.props.onUsergroupDelete}
       />

      </div>
    )
  }
}

export default UsergroupBox;
