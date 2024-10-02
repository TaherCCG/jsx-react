import React, { Component } from 'react';
import css from './css/NavBarForm.module.css';
import NavBarChild from './NavBarChild';  // Import NavBarChild component

class NavBarForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
        };
    }

    handleClick = () => {
        this.setState(prevState => ({
            isLoggedIn: !prevState.isLoggedIn,
        }));
    };

    render() {
        return (
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                {/* Conditionally render the NavBarChild or the Login button */}
                {this.state.isLoggedIn ? (
                    <NavBarChild handleClick={this.handleClick} />
                ) : (
                    <button onClick={this.handleClick}>
                        Login
                    </button>
                )}
            </div>
        );
    }
}

export default NavBarForm;
