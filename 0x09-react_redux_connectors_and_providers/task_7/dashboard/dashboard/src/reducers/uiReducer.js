import { Map } from 'immutable';

// Import the UI action types
import {
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
} from '../actions/uiActionTypes';

// Initial state with the user set to null
const initialState = Map({
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false, // Track user login status
    user: null, // Store user data
});

const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case DISPLAY_NOTIFICATION_DRAWER:
            return state.set('isNotificationDrawerVisible', true);

        case HIDE_NOTIFICATION_DRAWER:
            return state.set('isNotificationDrawerVisible', false);

        case LOGIN_SUCCESS:
            return state
            .set('isUserLoggedIn', true) // Set the user data from the action
            .set('user', action.user) // Set the user data from the action

        case LOGIN_FAILURE:
        case LOGOUT:
            return state
            .set('isUserLoggedIn', false) // Set user login status to false
            .set('user', null) // Set the user data to null

        default:
            return state;
    }
};


export default uiReducer;