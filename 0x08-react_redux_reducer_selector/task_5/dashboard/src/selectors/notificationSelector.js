import { create } from 'lodash';
import { createSelector } from 'reselect';

//  Select the Notifications state from the root state
const selectNotifications = (state) => state.notifications;

// Selector for the filter
export const filterTypeSelected = createSelector(
    [selectNotifications],
    (notifications) => notifications.get(filter)
);

// Selectot for all notifications
export const getNotifications = createSelector(
    [selectNotifications],
    (notifications) => notifications.get('notifications')
);

// Selector for unread notifications
export const getUnreadNotifications = createSelector(
    [getNotifications],
    (notifications).filter((notification) => !notification.get('isRead'))
);