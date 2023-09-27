import { describe, it, expect } from "@jest/globals";
import { Map, List } from 'immutable';
import {
    filterTypeSelected,
    getNotifications,
    getUnreadNotifications,
} from './notificationSelector';

describe('notificationSelector', () => {
    it('should select filterTypeSelected', () => {
      const state = Map({
        notifications: Map({
          filter: 'DEFAULT',
          notifications: List([]),
        }),
      });
      expect(filterTypeSelected(state)).toBe('DEFAULT');
    });
  
    it('should select getNotifications', () => {
      const notificationsList = List([
        Map({
          id: 1,
          isRead: false,
          type: 'default',
          value: 'New course available',
        }),
        Map({
          id: 2,
          isRead: false,
          type: 'urgent',
          value: 'New resume available',
        }),
      ]);
  
      const state = Map({
        notifications: Map({
          filter: 'DEFAULT',
          notifications: notificationsList,
        }),
      });
  
      expect(getNotifications(state).toJS()).toEqual(notificationsList.toJS());
    });
  
    it('should select getUnreadNotifications', () => {
      const notificationsList = List([
        Map({
          id: 1,
          isRead: false,
          type: 'default',
          value: 'New course available',
        }),
        Map({
          id: 2,
          isRead: false,
          type: 'urgent',
          value: 'New resume available',
        }),
        Map({
          id: 3,
          isRead: true,
          type: 'urgent',
          value: 'New data available',
        }),
      ]);
  
      const state = Map({
        notifications: Map({
          filter: 'DEFAULT',
          notifications: notificationsList,
        }),
      });
  
      expect(getUnreadNotifications(state).toJS()).toEqual([
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
      ]);
    });
  });
  