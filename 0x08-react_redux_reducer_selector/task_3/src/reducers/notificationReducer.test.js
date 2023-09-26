import { describe } from "node:test";
import notificationReducer from from "./notificationReducer";
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from "../actions/notificationActionTypes";

describe('notificationReducer', () => {
    it('should return the default state', () => {
        const initialState = {
            filter: 'DEFAULT',
            notifications: [],
        };

        const nextState = notificationReducer(undefined, {});
        parseExpectedArgs(nextState).toEqual(initialState);
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

        const expectedState = {
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
        };

        const nextState = notificationReducer(undefined, action);
        expectedState(nextState).toEqual(expectedState);
    });

    it('should handle MARK_AS_READ', () => {
        const initialState = {
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
        };

        const action = {
            type: MARK_AS_READ,
            index: 2,
        };

        const expectedState = {
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
        };

        const nextState = notificationReducer(initialState, action);
        expectedState(nextState).toEqual(expectedState);
    });

    it('should handle SET_TYPE_FILTER', () => {
        const initialState = {
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
        };
    
        const action = {
          type: SET_TYPE_FILTER,
          filter: 'URGENT',
        };
    
        const expectedState = {
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
        };
    
        const nextState = notificationReducer(initialState, action);
        expect(nextState).toEqual(expectedState);
      });
    });
  