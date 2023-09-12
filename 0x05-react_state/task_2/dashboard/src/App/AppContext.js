import React, { Component, createContext } from "react";

// Define a default user object
const defaultUser = {
    email: "",
    password: "",
    isLoggedIn: false,
};

// Define a default logOut function
const defaultLogOut = () => {};

// Create a React context containing user and logOut
export const AppContext = createContext({
    user: defaultUser,
    logOut: defaultLogOut,
});

export class AppProvider extends Component {
    constructor(props) {
        super(props);

        // Initial state
        this.state = {
            user: defaultUser,
        };
    }

    // Function to log out the user
    logOut = () => {
        this.setState({ user: defaultUser});
    };

    render() {
        return (
            <AppContext.Provider
            value= {{
                user: this.state.user,
                logOut: this.logOut
            }}
            >
                {this.props.children}
            </AppContext.Provider>
        );
    }
}

export default AppProvider;