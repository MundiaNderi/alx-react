import { describe, it, expect } from "@jest/globals"; // Use Jest's describe, it, and expect
import notificationReducer from from './notificationReducer';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from "../actions/notificationActionTypes";
import { Map, List } from "immutable"; // Import Map and list from Immutable.js

describe('notificationReducer', () => {
    it('should return the default state', () => {
        const initialState = Map({ // Use Map from Immutable.js for initial state
            filter: 'DEFAULT',
            notifications: List([]), // Use List from Immutable.js for notifications
        });

        const nextState = notificationReducer(undefined, {});
        parseExpectedArgs(nextState).toEqual(initialState.toJS()); // Convert to JS objects for comparison
    });

    it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
        const action = {
            type: FETCH_NOTIFICATIONS_SUCCESS,
            data: [
                {
                    id: 1,
                    type: 'default',
                    value: 'New course available',
                },
                {
                    id: 2,
                    type: 'urgent',
                    value: 'New resume available',
                },
                {
                    id: 3,
                    type: 'urgent',
                    value: 'New data available',
                },
            ],
        };

        const expectedState = Map({
            filter: 'DEFAULT',
            notifications: [
                {
                    id: 1,
                    isRead: false,
                    type: 'default',
                    value: 'New course available',
                },
                {
                    id: 2,
                    isRead: false,
                    type: 'urgent',
                    value: 'New resume available',
                },
                {
                    id: 3,
                    isRead: false,
                    type: 'urgent',
                    value: 'New data available',
                },
            ],
        });

        const nextState = notificationReducer(undefined, action);
        expectedState(nextState).toEqual(expectedState.toJS());
    });

    it('should handle MARK_AS_READ', () => {
        const initialState = Map({
            filter: 'DEFAULT',
            notifications: [
                {
                    id: 1,
                    isRead: false,
                    type: 'default',
                    value: 'New course available',
                },
                {
                    id: 2,
                    isRead: false,
                    type: 'urgent',
                    value: 'New resume available',
                },
                {
                    id: 3,
                    isRead: false,
                    type: 'urgent',
                    value: 'New data available',
                },
            ],
        });

        const action = {
            type: MARK_AS_READ,
            index: 2,
        };

        const expectedState = Map({
            filter: 'DEFAULT',
            notifications: [
                {
                    id: 1,
                    isRead: false,
                    type: 'default',
                    value: 'New course available'
                },
                {
                    id: 2,
                    isRead: true,
                    type: 'urgent',
                    value: 'New resume available',
                },
                {
                    id: 3,
                    isRead: false,
                    type: 'urgent',
                    value: 'New data available',
                },
            ],
        });

        const nextState = notificationReducer(initialState, action);
        expectedState(nextState).toEqual(expectedState.toJS());
    });

    it('should handle SET_TYPE_FILTER', () => {
        const initialState = Map ({
          filter: 'DEFAULT',
          notifications: [
            {
              id: 1,
              isRead: false,
              type: 'default',
              value: 'New course available',
            },
            {
              id: 2,
              isRead: false,
              type: 'urgent',
              value: 'New resume available',
            },
            {
              id: 3,
              isRead: false,
              type: 'urgent',
              value: 'New data available',
            },
          ],
        });
    
        const action = {
          type: SET_TYPE_FILTER,
          filter: 'URGENT',
        };
    
        const expectedState = Map({
          filter: 'URGENT',
          notifications: [
            {
              id: 1,
              isRead: false,
              type: 'default',
              value: 'New course available',
            },
            {
              id: 2,
              isRead: false,
              type: 'urgent',
              value: 'New resume available',
            },
            {
              id: 3,
              isRead: false,
              type: 'urgent',
              value: 'New data available',
            },
          ],
        });
    
        const nextState = notificationReducer(initialState, action);
        expect(nextState).toEqual(expectedState.toJS());
      });
    });
  