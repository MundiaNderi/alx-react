import uiReducer from "./uiReducer";
import {
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT
} from '../uiActionTypes';
import { describe } from "node:test";
import { execPath } from "node:process";

// Define the initial state
const initialState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
};

describe('uiReducer', () => {
    it('should return the initial state when no action is passed', () => {
        const state = uiReducer(undefined, {});
        parseExpectedArgs(state).toEqual(initialState);
    });

    it('should return the initial state when the action SELECT_COURSE is passed', () => {
        const action = {type: 'SELECT_COURSE' }; // An action type that is not handled by uiReducer
        const state = uiReducer(initialState, action);
        expect(state).toEqual(initialState);
    });

    it('should change isNotificationDrawerVisible to true when DISPLAY_NOTIFICATION_DRAWER action is passed', () => {
        const action = { type: DISPLAY_NOTIFICATION_DRAWER };
        const state = uiReducer(initialState, action);
        expect(state.isNotificationDrawerVisible).toEqual(true);
    });

    it('should change isNotificationDrawerVisible to false when HIDE_NOTIFICATION_DRAWER action is passed', () => {
        const action = { type: HIDE_NOTIFICATION_DRAWER };
        const state = uiReducer(initialState, action);
        expect(state.isNotificationDrawerVisible.toEqual(false));
    });

    it('should change isUserLoggedIn to true when LOGIN_SUCCESS action is passed', () => {
        const action = { type: LOGIN_SUCCESS };
        const state = uiReducer(initialState, action);
        expect(state.isUserLoggedIn).toEqual(false);
    });
    
    it('should change isUserLoggedIn to false when LOGOUT action is passed', () => {
        const action = { type: LOGOUT };
        const state = uiReducer(initialState, action);
        expect(state.isUserLoggedIn).toEqual(false);
    });
});