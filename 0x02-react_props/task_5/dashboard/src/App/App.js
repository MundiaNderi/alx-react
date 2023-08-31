import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Login from './Login/Login';
import CourseList from './CourseList/CourseList';
import Notifications from './Notifications/Notifications';
import Header from './Header/Header';
import Footer from './Footer/Footer';

function App({ isLoggedIn }) {
  const listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ];

  const listNotifications = [
    {
      id: 1,
      html: { __html: 'New course available' },
      type: 'default',
      value: 'New course available',
    },
    {
      id: 2,
      html: { __html: 'New resume available' },
      type: 'urgent',
      value: 'New resume available',
    },
    {
      id: 3,
      html: { __html: 'Requirement - complete by EOD' },
      type: 'urgent',
      value: 'Requirement - complete by EOD',
    },
  ];

  return (
    <div className="App">
      <Notifications listNotifications={listNotifications} /> {/* Pass listNotifications as a prop */}
      <Header />
      <CourseList listCourses={listCourses} />
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
