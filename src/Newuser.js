//Newuser.js
import React, { Component } from 'react';
import axios from 'axios';
import style from './style';


class NewUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      name: '',
      surname: '',
      dob: new Date(),
      usergroup: ''

  };

  this.handleUsernameChange = this.handleUsernameChange.bind(this);
  this.handleNameChange = this.handleNameChange.bind(this);
  this.handlePasswordChange = this.handlePasswordChange.bind(this);
  this.handleSurnameChange = this.handleSurnameChange.bind(this);
  this.handleDobChange = this.handleDobChange.bind(this);
  this.handleUsergroupChange = this.handleUsergroupChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);

  this.addUserGroup = this.addUserGroup.bind(this);

  this.checkFields = this.checkFields.bind(this);

    //this.state = { data: [] };
    //this.loadUsersFromServer = this.loadUsersFromServer.bind(this);
  }

  checkFields(){
    if(!(this.state.username && this.state.password && this.state.name && this.state.surname && this.state.dob && this.state.usergroup))
    {
      document.getElementById("submitButton").style.backgroundColor = '#6ec6ff';
      return;
    }
    else {
      document.getElementById("submitButton").style.backgroundColor = '#2196f3';
      document.getElementById("submitButton").style.cursor = 'pointer';
      document.getElementById("submitButton").style.boxShadow = '2px 2px 4px #555';
      return;
    }
  }

  componentDidMount() {
  setInterval(this.checkFields, 2000);
  }
/*
  loadUsersFromServer() {
    axios.get(this.props.url).then(res => {
      this.setState({ data: res.data});
    })
  }

  componentDidMount() {
  this.loadUsersFromServer();
  setInterval(this.loadUsersFromServer, this.props.pollInterval);
}*/
  handleSubmit(e){
    e.preventDefault();

    let username = this.state.username.trim();
    let password = this.state.password.trim();
    let name = this.state.name.trim();
    let surname = this.state.surname.trim();
    let dob = this.state.dob;
    let usergroup = this.state.usergroup.trim();
    if(!(username && password && name && surname && dob && usergroup))
    {
      alert("Error: Unfilled fields detected.");
      return;
    }


    this.props.onUserSubmit({ username: username,
                              password: password,
                              name: name,
                              surname: surname,
                              dob: dob,
                              usergroup: usergroup
                            });
    this.setState({ username: '', password: '', name: '', surname: '', dob: '', })
  }

addUserGroup(){
  console.log("HELLO");
}

  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleSurnameChange(e) {
    this.setState({ surname: e.target.value });
  }

  handleDobChange(e) {
    this.setState({ dob: e.target.value });
  }

  handleUsergroupChange(e) {
    this.setState({ usergroup: e.target.value });
  }

  render() {
    return (
      <div style={style.userListBox}>
        <h2 style={style.userListTitle}> Add a new User </h2>
        <div style= { style.FormBox }>
        <form style={style.Form } onSubmit={ this.handleSubmit }>
          <input
            type='text'
            placeholder='Username'
            style={style.FormText}
            value={ this.state.username }
            onChange={ this.handleUsernameChange} />
          <input
            type='password'
            placeholder='Password'
            style={style.FormText}
            value={ this.state.password }
            onChange={ this.handlePasswordChange} />
          <input
            type='text'
            placeholder='Name'
            style={style.FormText}
            value={ this.state.name }
            onChange={ this.handleNameChange} />
          <input
            type='text'
            placeholder='Surname'
            style={style.FormText}
            value={ this.state.surname }
            onChange={ this.handleSurnameChange} />
          <input
            type='date'
            style={style.FormText}
            value={ this.state.dob }
            onChange={ this.handleDobChange} />
          <input
            type='text'
            placeholder='Usergroup'
            style={style.FormUsergroup}
            value={ this.state.usergroup }
            onChange={ this.handleUsergroupChange} />
          <button
          type="button"
          style= { style.FormUsergroupButton }
          onclick={this.addUserGroup}>+</button>
          <input
            id='submitButton'
            type='submit'
            style={ style.FormPost }
            value='Post' />

        </form>
        </div>
      </div>
    )
  }
}

export default NewUser;
