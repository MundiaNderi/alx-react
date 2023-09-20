import { bindActionCreators } from 'redux';
import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreators';
import bind from 'function-bind';

export const boundLogin = bindActionCreators(login, store.dispatch);
export const boundLogout = bindActionCreators(logout, store.dispatch);
export const boundDisplayNotificationDrawer = bindActionCreators(displayNotificationDrawer, store.dispatch);
export const boundHideNotificationDrawer = bindActionCreators(hideNotificationDrawer, store.dispatch);