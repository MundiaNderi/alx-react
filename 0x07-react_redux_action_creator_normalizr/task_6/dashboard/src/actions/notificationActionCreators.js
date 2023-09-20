import { bindActionCreators } from 'redux';
import { markAsRead, setNotificationFilter } from './notificationActionCreators';

export const boundMarkAsRead = bindActionCreators(markAsRead, store.dispatch);
export const boundSetNotificationFilter = bindActionCreators(setNotificationFilter, store.dispatch);