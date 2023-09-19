import React from "react";
import logo from "../assets/holberton-logo.jpg";
import { StyleSheet, css } from 'aphrodite';
import AppContext from '../App/AppContext';

const styles = StyleSheet.create({
  header: {
    fontSize: '1.4rem',
    color: '#e0354b',
    display: 'flex',
    alignItems: 'center',
    borderBottom: '3px solid #e0354b',
    paddingTop: '200px',
  },
  logo: {
    width: '200px',
    height: '200px',
  },
  welcome: {
    marginLeft: 'auto', // Move the welcome text to the right
  },
});

class Header extends React.Component {
    // Use the contextType API to inherit context
    static contextType = AppContext;


    render() {
        const { user, logOut } = this.context; // Get user and logOut from context
        return (
            <div className={css(styles.header)}>
                <img src={logo} className={css(styles.logo)} alt="logo" />
                <h1>School Dashboard</h1>
                {/* Conditional rendering based on isLoggedIn */}
                {user.isLoggedIn && (
                    <div className={css(styles.welcome)}>
                        Welcome {user.email} (<span id="logoutSection" onClick={logout}>logout</span>)
                    </div>
                )}
            </div>
        );
    }
}


export default Header;
