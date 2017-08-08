//User.js
import React, { Component } from 'react';
import style from './style';
import './styles.css';
import marked from 'marked';

class User extends Component {
  constructor(props){
    super(props);

    this.state = {
      dob: new Date(this.props.userObj.dob),
      usergroups: []
    };

    //binding methods
    this.deleteUser = this.deleteUser.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  deleteUser(e){
    e.preventDefault();
    let id = this.props.userObj._id;
    this.props.onUserDelete(id);
    console.log('deleteUser() called');

  }

  updateUser(e){
    e.preventDefault();
    let id = this.props.userObj._id;
    this.props.onUserUpdate(id, this.props.userObj);
    console.log('updateUser() called');

  }

  render() {
    return (

      <div style={ style.user }>
        <strong>Username: </strong> {this.props.userObj.username} <br/>
        <strong>Password: </strong> { this.props.userObj.password } <br/>
        <strong>Date of birth: </strong> { this.state.dob.toDateString() } <br/>
        <strong>Name: </strong> {this.props.userObj.name} <br/>
        <strong>Surname: </strong> {this.props.userObj.surname} <br/>
        <strong>Usergroup: </strong> {this.props.userObj.usergroup} <br/>
        <a href='#'className='deleteButt' style={ style.deleteLink } onClick={this.deleteUser} >Delete</a>
        <a href={"http://localhost:3000/updateUser/" + this.props.userObj._id} className='updateButt' style={ style.updateLink } >Update</a>
      </div>
    )
  }
}

export default User;
