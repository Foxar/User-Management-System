//Menu.js
import React, { Component } from 'react';
import './styles.css';
import marked from 'marked';

class Menu extends Component {
  render() {
    return (
      <div id='menu' className='menu'>
        <table className='menuTable'>
        <tr><td className='menuOption'><a href='/home'>Home</a></td></tr>
        <tr><td className='menuOption'><a href='/manageUsers'>Manage Users</a></td></tr>
        <tr><td className='menuOption'><a href='/manageUsergroups'>Manage Usergroups</a></td></tr>
        <tr><td className='menuOption'><a href='/createUser'>New User</a></td></tr>
        <tr><td className='menuOption'><a href='/createUserGroup'>New Usergroup</a></td></tr>

        </table>
      </div>
    )
  }
}

export default Menu;
