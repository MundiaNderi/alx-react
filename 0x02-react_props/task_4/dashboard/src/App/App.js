import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Login from './Login/Login';
import CourseList from './CourseList/CourseList';
import Notifications from './Notifications/Notifications';
import Header from './Header/Header';
import Footer from './Footer/Footer';

function App({ isLoggedIn }) {
  return (
    <div className="App">
      <Notifications />
      <Header />
      {isLoggedIn ? <CourseList /> : <Login />}
      <Footer />
    </div>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false,
};

export default App;
