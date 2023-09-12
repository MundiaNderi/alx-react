import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import Notifications from "../Notifications/Notifications";
import BodySection from "../BodySection/BodySection"; // Import the BodySection component
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom"; // Import the BodySectionWithMarginBottom component
import "./App.css";
import PropTypes from "prop-types";
import { getLatestNotification } from "../utils/utils";

class App extends React.Component {
    listCourses = [
        { id: 1, name: "ES6", credit: 60 },
        { id: 2, name: "webpack", credit: 20},
        { id: 3, name: "React", credit: 40},
    ];

    listNotifications = [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, type: "urgent", value: "requirement - complete by EOD"},
    ];

    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyDown);
    }

    handleKeyDown = (event) => {
        if(event.ctrlKey && event.key === "h") {
            // Display the alert and call the logOut function
            alert("Logging you out");
            this.props.logOut();
        }
    };

    render() {
        return (
            <React.Fragment>
                <div className='App'>
                    <div className='heading-section'>
                        <Notifications listNotifications={this.Notifications} />
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
    logOut: () => {} // Default empty function for logOut
};

App.propTypes = {
    isLoggedin: PropTypes.bool,
    logOut: PropTypes.func // Prop type for logOut
};

export default App;
