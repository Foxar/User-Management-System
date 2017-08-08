//Newuser.js
import React, { Component } from 'react';
import axios from 'axios';
import style from './style';


class Updateuser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      name: '',
      surname: '',
      dob: '',
      usergroup: ''

  };



  this.handleUsernameChange = this.handleUsernameChange.bind(this);
  this.handleNameChange = this.handleNameChange.bind(this);
  this.handlePasswordChange = this.handlePasswordChange.bind(this);
  this.handleSurnameChange = this.handleSurnameChange.bind(this);
  this.handleDobChange = this.handleDobChange.bind(this);
  this.handleUsergroupChange = this.handleUsergroupChange.bind(this);
  this.handleUpdate = this.handleUpdate.bind(this);

    //this.state = { data: [] };
  this.loadUserFromServer = this.loadUserFromServer.bind(this);

  this.checkFields = this.checkFields.bind(this);

  this.loadUserFromServer();
  console.log("UPDATEUSER CREATED");
  console.log(this.state);
  }

  loadUserFromServer() {
    console.log("LOADING USER " + this.props.userID + " FROM SERVER");
    axios.get(this.props.url + this.props.userID)
    .then(res => {
      this.setState(res.data);
      console.log("THEN()");
      console.log(this.state);
      console.log(res.data);
    }).catch((error) => {
      console.log("CATCH()");
      console.log(this.props.userID);
      console.log(error);
    });
    console.log(this.props.url + this.props.userID);
    console.log(this);
  }


  componentDidMount() {
    this.loadUserFromServer();
    setInterval(this.checkFields, 2000);
}
  handleUpdate(e){
    console.log("handleupdate");
    e.preventDefault();

    let username = this.state.username.trim();
    let password = this.state.password.trim();
    let name = this.state.name.trim();
    let surname = this.state.surname.trim();
    let dob = this.state.dob;
    if(!(username && password && name && surname && dob && usergroup))
    {
      alert("Error: Unfilled fields detected.");
      return;
    }

    console.log("test");
    console.log( this.state.dob );
    console.log(dob);
    let usergroup = this.state.usergroup.trim();

    this.props.handleUserUpdateSubmit(this.props.userID,
                            { username: username,
                              password: password,
                              name: name,
                              surname: surname,
                              dob: dob,
                              usergroup: usergroup});
    this.setState({ username: '', password: '', name: '', surname: '', dob: '', usergroup: ''});
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


  handleUsernameChange(e) {
    console.log('username changed');
    this.setState({ username: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  handleNameChange(e) {
    this.setState({ data: {name: e.target.value }});
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
        <h2> Edit user </h2>
        <h3> User ID: {this.props.userID}</h3>
        <form style={style.Form } onSubmit={ this.handleUpdate }>
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
            style={style.FormText}
            value={ this.state.usergroup }
            onChange={ this.handleUsergroupChange} />
          <input
            id="submitButton"
            type='submit'
            style={ style.FormPost }
            value='Post' />

        </form>
      </div>
    )
  }
}

export default Updateuser;
