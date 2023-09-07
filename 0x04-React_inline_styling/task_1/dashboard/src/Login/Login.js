import React from "react";
import { StyleSheet, css} from 'aphrodite';

const styles = StyleSheet.create({
    appBody: {
      fontSize: '1rem',
      padding: '2rem',
      backgroundColor: '3px solid #e0354b',
      height: '45%',
    },
    input: {
      margin: '10px',
    },
});

function Login() {
  return (
    <React.Fragment>
      <div className={css(styles.appBody)}>
        <p>Login to access the full dashboard</p>
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" autoComplete="email"></input>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" autoComplete="current-password"></input>
          <button>OK</button>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Login;
