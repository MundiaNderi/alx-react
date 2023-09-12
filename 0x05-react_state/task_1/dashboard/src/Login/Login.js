import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    appBody: {
        fontSize: '1rem',
        padding: '2rem',
        borderBottom: '3px solid #e0354b',
        height: '45%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    input: {
        margin: '10px'
    },
    button: {
        margin: '10px',
    },
    '@media (max-width: 900px)': {
        input: {
            width: '100%'
        },x
    },
});

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false, // Initialize isLoggedIn as false
            email: '', // Add email to state
            password: '', // Add password to state
            enableSubmit: false, // Initialize enableSubmit as false
        };
    }

    // Function to handle Login submission
    handleLoginSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behaviour
        // Update the state ti indicate that the user is logged in
        this.setState( {isLoggedIn: true });
    };

    // Function to handle email input change
    handleChangeEmail = (e) => {
        const email = e.target.value;
        // Update email value and enableSubmit based on input value
        this.setState({
            email,
            enableSubmit: email.trim() !== '' & this.state.password.trim() !== '',
         });
    };

    // Function to handle password input change
    handleChangePassword = (e) => {
        const password = e.target.value
        this.setState({
            password,
            enableSubmit: this.state.email.trim() !== '' && password.trim() !== '',
        });
    }

    render() {
        const { isLoggedIn } = this.state;

        // Conditional rendering based on isLoggedIn state
        return (
            <React.Fragment>
                <div className={css(styles.appBody)}>
                    {isLoggedIn ? (
                        <p>You are logged in!</p>
                    ) : (
                        <React.Fragment>
                            <p>Login to access the full dashboard</p>
                            <form className={css(styles.form)} onSubmit={this.handleLoginSubmit}>
                                <label htmlFor='email' className={css(styles.input)}>
                                    Email:
                                </label>
                                <input
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="email"
                                className={css(styles.input)}
                                value={this.state.email} // Set input value from state
                                onChange={this.handleChangeEmail} // Handle input change
                                />
                                <label htmlFor="password" className={css(styles.input)}>
                                    Password:
                                </label>
                                <input
                                type="password"
                                name="password"
                                id="password"
                                autoComplete="current-password"
                                className={css(styles.input)}
                                value={this.state.password} // Set input value from state
                                onChange={this.handleChangePassword} // Handle input change
                                />
                                <input
                                type="submit" // Use input with type submit
                                value="OK"
                                className={css(styles.button)}
                                disabled={!enableSubmit} // Disable submit button based on enableSubmit state
                                />
                            </form>
                        </React.Fragment>
                    )}
                </div>
            </React.Fragment>
        );
    }
}

export default Login;