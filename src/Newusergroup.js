//Newusergroup.js
import React, { Component } from 'react';
import axios from 'axios';
import style from './style';


class Newusergroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
  };

  this.handleNameChange = this.handleNameChange.bind(this);

  this.handleSubmit = this.handleSubmit.bind(this);
}

  handleSubmit(e){
    e.preventDefault();

    let name = this.state.name.trim();

    this.props.onUsergroupSubmit({name: name});
    this.setState({ name: ''})
  }


  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  render() {
    return (
      <div style={style.userListBox}>
        <h2> Add a new Usergroup </h2>
        <form style={style.Form } onSubmit={ this.handleSubmit }>
          <input
            type='text'
            placeholder='Name'
            style={style.FormText}
            value={ this.state.name }
            onChange={ this.handleNameChange} />
          <input
            type='submit'
            style={ style.FormPost }
            value='Post' />

        </form>
      </div>
    )
  }
}

export default Newusergroup;
