import React from "react";
import { connect } from  "react-redux";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import Notifications from "../Notifications/Notifications";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";
import { StyleSheet, css } from "aphrodite";
import PropTypes from "prop-types";
import { getLatestNotification } from "../utils/utils";
import { AppContext } from "./AppContext"; // Import the App context
import { displayNotificationDrawer, hideNotificationDrawer} from '../actions/uiActionCreators';

const mapStateToProps = (state) => ({
    isLoggedIn: state.uiReducer.isLoggedIn,
    displayDrawer: state.isNotificationDrawerVisible,
})

const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
  login: loginRequest, // Map loginRequest action creator to login prop
}

class App extends React.Component {
  listCourses = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
  ];


  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }


  handleKeyPress(e) {
    if (e.ctrlKey && e.key === "h") {
      e.preventDefault();
      alert("Logging you out");
      // Call the logout action creator here with this.props
      this.props.loginRequest(email, password);
     }
  }


  render() {
    return (
      <React.Fragment>
        <div className={css(styles.App)}>
          <div className="heading-section">
            <Notifications
              listNotifications={this.state.listNotifications} // Pass listNotifications to Notifications component
              displayDrawer={this.props.displayDrawer}
              handleDisplayDrawer={this.handleDisplayDrawer}
              handleHideDrawer={this.handleHideDrawer}
              markNotificationAsRead={this.markNotificationAsRead} // Pass the markNotificationAsRead function to Notifications component
            />
            <Header />
          </div>
          <AppContext.Provider
          value={{
            user: this.state.user,
            logIn: this.logIn, // Pass the logIn function to context
            logOut: this.logOut // Pass the logOut function to context
          }}
          >
            {this.state.user.isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={this.listCourses} />
                </BodySectionWithMarginBottom>
               ) : (
                 <BodySectionWithMarginBottom title="Log in to continue">
                   <Login />
                 </BodySectionWithMarginBottom>
               )} 
          </AppContext.Provider>
          <BodySection title="News from the school">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis at tempora odio, necessitatibus repudiandae reiciendis cum nemo sed asperiores ut molestiae eaque aliquam illo ipsa
              iste vero dolor voluptates.
            </p>
          </BodySection>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  App: {
    height: "100vh",
    maxWidth: "100vw",
    position: "relative",
    fontFamily: "Arial, Helvetica, sans-serif",
  },
});

App.defaultProps = {
  isLoggedIn: false,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
