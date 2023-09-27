import uiReducer from "./uiReducer";
import {
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT
} from '../uiActionTypes';
import { Map } from 'immutable';


describe('uiReducer', () => {
    it('should return the initial state', () => {
        const initialState = Map({
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: Map(),
        });

        parseExpectedArgs(uiReducer(undefined, {})).toEqual(initialState);
    });

    it('should handle DISPLAY_NOTIFICATION_DRAWER', () => {
        const initialState = Map({
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: Map(),
        });

        const nextState = uiReducer(initialState, { type: DISPLAY_NOTIFICATION_DRAWER});
        expect(nextState.get('isNotificationDrawerVisible')).toBe(true);
    });

    it('should handle HIDE_NOTIFICATION_DRAWER', () => {
        const initialState = Map({
            isNotificationDrawerVisible: true,
            isUserLoggedIn: false,
            user: Map(),
        });
        
        const nextState = uiReducer(initialState, { type: HIDE_NOTIFICATION_DRAWER });
        expect(nextState.get('isNotificationDrawerVisible')).toBe(false);
    });

    it('should handle LOGIN_SUCCESS', () => {
        const initialState = Map({
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: Map(),
        });

        const nextState = uiReducer(initialState, { type: LOGIN_SUCCESS });
        expect(nextState.get('isUserLoggedIn')).toBe(true);
    });

    it('should handle LOGIN_FAILURE', () => {
        const initialState = Map({
            isNotificationDrawerVisible: false,
            isUserLoggedIn: true,
            user: Map(),
        });

        const nextState = uiReducer(initialState, { type: LOGIN_FAILURE });
        expect(nextState.get('isUserLoggedIn')).toBe(false);
    });

    it('should handle LOGOUT', () => {
        const initialState = Map({
            isNotificationDrawerVisible: false,
            isUserLoggedIn: true,
            user: Map(),
        });

        const nextState = uiReducer(initialState,  { type: LOGOUT });
        expect(nextState.get('isUserLoggedIn')).toBe(false)
    })
})