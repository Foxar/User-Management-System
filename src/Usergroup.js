//User.js
import React, { Component } from 'react';
import style from './style';
import marked from 'marked';

class Usergroup extends Component {
  constructor(props){
    super(props);

    //binding methods
    this.deleteUsergroup = this.deleteUsergroup.bind(this);
  }

  deleteUsergroup(e){
    e.preventDefault();
    let id = this.props.usergroupObj._id;
    this.props.onUsergroupDelete(id);
  }

  render() {
    return (
      <div style={ style.user }>
        <strong>Name: </strong> {this.props.usergroupObj.name} <br/>
        <a href='#' style={ style.deleteLinkUsergroup } onClick={this.deleteUsergroup} >X</a>
      </div>
    )
  }
}

export default Usergroup;
