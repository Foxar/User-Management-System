//Banner.js
import React, { Component } from 'react';
import style from './style';
import marked from 'marked';

class Banner extends Component {
  render() {
    return (
      <div style={ style.banner }>
        <h2>User Management System</h2>
      </div>
    )
  }
}

export default Banner;
