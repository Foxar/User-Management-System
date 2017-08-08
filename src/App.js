//App.js
import React, { Component } from 'react';
import style from './style';
import './styles.css';
import marked from 'marked';
import axios from 'axios';
import Banner from './Banner';
import UserListBox from './UserListBox';

import UsergroupBox from './Usergroupbox';
import NewUser from './Newuser';
import Newusergroup from './Newusergroup';
import Updateuser from './Updateuser';
import Menu from './Menu';

class App extends Component {
constructor(props){
  super(props);
  this.state = { data: [] };
  this.loadUsersFromServer = this.loadUsersFromServer.bind(this);
  this.handleUserSubmit = this.handleUserSubmit.bind(this);
  this.handleUserDelete = this.handleUserDelete.bind(this);
  this.handleUserUpdate = this.handleUserUpdate.bind(this);
  this.handleUserUpdateSubmit = this.handleUserUpdateSubmit.bind(this);
  this.handleUsergroupDelete = this.handleUsergroupDelete.bind(this);
  this.handleUsergroupSubmit = this.handleUsergroupSubmit.bind(this);

  console.log("hello2");
  console.log(this);
}



loadUsersFromServer() {
  console.log("PERFORMING A GET AT " + this.props.url);
  axios.get(this.props.url)
  .then(res => {
    this.setState({ data: res.data});
  })
}

componentDidMount() {
this.loadUsersFromServer();
setInterval(this.loadUsersFromServer, this.props.pollInterval);
}

handleUserDelete(id) {
  axios.delete(`${this.props.url}/${id}`)
  .then(res =>{
    console.log('User ddeleted');
  })
  .catch(err => {
    console.log(`${this.props.url}/${id}`);
    console.error(err);
  });
}

handleUsergroupDelete(id){
  axios.delete(`${this.props.url}/${id}`)
  .then(res =>{
    console.log('Usergroup ddeleted');
  })
  .catch(err => {
    console.log(`${this.props.url}/${id}`);
    console.error(err);
  });
}

handleUserUpdate(id, user){
  console.log('handleUserUpdate()');
}

handleUserUpdateSubmit(id, user){
  axios.put(`${this.props.url}/${id}`, user)
  .then(res =>{
    console.log('handleUserUpdateSubmit()');
    console.log(user);
  })
  .catch(err => {
    console.log("ERROR: HANDLEUSERUPDATESUBMIT");
    console.log("URL: " + this.props.url + "/" + id);
    console.log(err);
  })
}

handleUserSubmit(user) {
  let users = this.state.data;
  user.id = Date.now();
  let newUsers = users.concat([user]);
  this.setState({data: newUsers});
  console.log("TEST2");
  console.log(user);
  axios.post(this.props.url, user)
  .catch(err => {
    console.log("ERROR HANDLEUSERSUBMIT");
    console.log("URL:");
    console.log(this.props.url);
    console.log(user);
    console.log(newUsers);
    console.error(err);
    this.setState({data: user});
  });
}

handleUsergroupSubmit(usergroup) {
  console.log(this.state.data);
  let usergroups = this.state.data;
  usergroup.id = Date.now();
  let newUsergroups = usergroups.concat([usergroup]);
  this.setState({data: newUsergroups});
  axios.post(this.props.url, usergroup)
  .catch(err => {
    console.error(err);
    this.setState({data: usergroup});
  });
}

  render() {
    console.log("hello3");
    console.log(this.context);
    let content;

      console.log(this.props.page);

    switch(this.props.page)
    {
      case 'users':
      {
        content = <UserListBox
                    onUserDelete={ this.handleUserDelete }
                    onUserUpdate={ this.handleUserUpdate }
                		url='http://localhost:3001/api/users'
                		pollInterval={2000} />
      }
      break;
      case 'usergroups':
      {
        content = <UsergroupBox
                    onUsergroupDelete = { this.handleUsergroupDelete }
                		url='http://localhost:3001/api/userGroups'
                		pollInterval={2000} />
      }
      break;
      case 'home':
      {
        //Welcome
        content = <div><h2 style={{textAlign: 'center', margin:'15vh auto', fontFamily:'Helvetica, sans-serif',}}>Welcome to the User Management System </h2><p style={{textAlign: 'center', margin:'15vh auto', fontFamily:'Helvetica, sans-serif'}}>This is a simple CRUD application allowing interaction with a MongoDB database. Please choose an item on the left to get started.</p></div>
      }
      break;
      case 'newuser':
      {
        content = <NewUser onUserSubmit={ this.handleUserSubmit }/>
      }
      break;
      case 'newusergroup':
      {
        content = <Newusergroup onUsergroupSubmit={ this.handleUsergroupSubmit } />
      }
      break;
      case 'updateuser':
      {
        console.log("hello");
        console.log(this.props.params);

        content = <Updateuser
                    url='http://localhost:3001/api/users/'
                    userID={this.props.match.params._id}
                    pollInterval={2000}
                    handleUserUpdateSubmit = { this.handleUserUpdateSubmit } />
        console.log(this.props.match.params._id);
      }
      break;
      default:
      break;
    }

    return (
      <div>
      <Banner/>
      <div style={style.app}>
        <Menu/>
        {content}
        <p style={style.footer}>Copyright (c) 2017 Michał Mostowik All Rights Reserved. </p>
      </div>
      </div>
    )
  }
}

export default App;
