import { describe, it, expect } from "@jest/globals";
import notificationReducer from './notificationReducer';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from "../actions/notificationActionTypes";
import { Map, List } from "immutable";

describe('notificationReducer', () => {
  it('should return the default state', () => {
    const initialState = Map({
      filter: 'DEFAULT',
      notifications: List([]),
    });

    const nextState = notificationReducer(undefined, {});
    expect(nextState.toJS()).toEqual(initialState.toJS());
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
      notifications: List([
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
      ]),
    });

    const nextState = notificationReducer(undefined, action);
    expect(nextState.toJS()).toEqual(expectedState.toJS());
  });

  it('should handle MARK_AS_READ', () => {
    const initialState = Map({
      filter: 'DEFAULT',
      notifications: List([
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
      ]),
    });

    const action = {
      type: MARK_AS_READ,
      index: 2,
    };

    const expectedState = Map({
      filter: 'DEFAULT',
      notifications: List([
        {
          id: 1,
          isRead: false,
          type: 'default',
          value: 'New course available',
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
      ]),
    });

    const nextState = notificationReducer(initialState, action);
    expect(nextState.toJS()).toEqual(expectedState.toJS());
  });

  it('should handle SET_TYPE_FILTER', () => {
    const initialState = Map({
      filter: 'DEFAULT',
      notifications: List([
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
      ]),
    });

    const action = {
      type: SET_TYPE_FILTER,
      filter: 'URGENT',
    };

    const expectedState = Map({
      filter: 'URGENT',
      notifications: List([
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
      ]),
    });

    const nextState = notificationReducer(initialState, action);
    expect(nextState.toJS()).toEqual(expectedState.toJS());
  });
});
