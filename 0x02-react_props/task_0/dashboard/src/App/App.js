import React from 'react';
import Notifications from './Notifications';
import Login from './Login';
import Footer from './Footer';
import Header from './Header';
import { getFullYear, getFooterCopy } from './utils';
import holberton_logo from './holberton-logo.jpg'; 

function App() {
  return (
    <>
      <Notifications />
      <div className="App">
        <Header />
        <img src={holberton_logo} alt='Holberton Logo' /> 
        <h1>School dashboard</h1>
        <div className="App-body">
          <Login />
          <p>Login to access the full dashboard</p>
        </div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" />
        <button>OK</button>
        <Footer />
      </div>
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>
    </>
  );
}

export default App;
