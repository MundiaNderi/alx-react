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
        },
    },
});

function Login() {
    return (
        <React.Fragment>
            <div className={css(styles.appBody)}>
                <p>Login to access the full dashboard</p>
                <form className={css(styles.form)}>
                    <label htmlFor="email" className={css(styles.input)}>Email:</label>
                    <input type="email" name="email" id="email" autoComplete="email" className={css(styles.input)} />
                    <label htmlFor="password" className={css(styles.input)}>Password:</label>
                    <input type="password" name="password" id="password" autoComplete="current-password" className={css(styles.input)} />
                    <button className={css(styles.button)}>OK</button>
                </form>
            </div>
        </React.Fragment>
    );
}

export default Login;