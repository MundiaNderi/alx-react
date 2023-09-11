import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from  '../Courselist/CourseList';
import Notifications from '../Notifications/Notifications';
import BodySection from '../BodySection/BodySectionWithMarginBottom';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    app: {
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
    },
    headingSection: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: '1px solid #ddd',
    },
    appHeader: {
        fontSize: '2rem',
        color: '#e0354b',
        display: 'flex',
        alignItems: 'center',
        borderBottom: '3px solid #e0354b',
        padding: '16px',
        backgroundColor: '#f5f5f5ab',
    },
});

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayDrawer: false, // Default state
        };
    }

    listCourses = [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 }
    ];

    listNotifications = [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', value: 'requirement - complete by EOD'},
    ];

    componentdDidMount() {
        document.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = (event) => {
        if (event.ctrlKey && event.key === 'h') {
            // Display the alert and call the logOut function
            alert('Logging you out');
            this.props.logOut();
        }
    };

    handleDisplayDrawer = () => {
        // Function to set displayDrawer to true
        this.setState({ displayDrawer: true });
    };

    handleHideDrawer = () => {
        // Function to set displayDrawer to false
        this.setState({ displayDrawer: false });
    };

    render() {
        return (
          <React.Fragment>
            <div className={css(styles.app)}>
              <div className={css(styles.headingSection)}>
                <Notifications
                  listNotifications={this.listNotifications}
                  displayDrawer={this.state.displayDrawer} // Pass the state
                  handleDisplayDrawer={this.handleDisplayDrawer} // Pass the function
                  handleHideDrawer={this.handleHideDrawer} // Pass the function
                />
                <Header />
              </div>
              {this.props.isLoggedin ? (
                <BodySectionWithMarginBottom>
                  <CourseList listCourses={this.listCourses} />
                </BodySectionWithMarginBottom>
              ) : (
                <BodySectionWithMarginBottom title="Log in to continue">
                  <Login />
                </BodySectionWithMarginBottom>
              )}
              <Footer />
              <BodySection title="News from the School">
                <p>Some random text for news ...</p>
              </BodySection>
            </div>
          </React.Fragment>
        );
      }
    }
    
    App.defaultProps = {
      isLoggedin: false,
      logOut: () => {}, // Default empty function for logOut
    };
    
    App.propTypes = {
      isLoggedin: PropTypes.bool,
      logOut: PropTypes.func, // Prop type for logOut
    };
    
    export default App;