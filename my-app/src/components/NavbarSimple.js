
import React, { Component } from 'react';
import css from './css/NavBarSimple.module.css';

class NavBarSimple extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Welcome, Guest!',
      isLoggedIn: false,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      message: prevState.isLoggedIn ? 'Welcome, Guest!' : 'Welcome back, User!',
      isLoggedIn: !prevState.isLoggedIn,
    }));
  };

  render() {
    return (
      <div className={css.NavBar}>
        <h1>My Gallery</h1>
        <span>{this.state.message}</span>
        <button onClick={this.handleClick}>
          {this.state.isLoggedIn ? 'Logout' : 'Login'}
        </button>
      </div>
    );
  }
}

export default NavBarSimple;
