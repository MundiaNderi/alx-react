import * as types from './notificationActionTypes';

export function setLoadingState(isLoading) {
    return {
        type: types.SET_LOADING_STATE,
        payload: isLoading,
    };
}

export function setNotifications(notifications) {
    return {
        type: types.FETCH_NOTIFICATIONS_SUCCESS,
        payload: notifications,
    };
}

export function fetchNotifications() {
    return async (dispatch) => {
        dispatch(setloadingState(true));

        try {
            const response = await fetch('/notifications.json');
            if (response.ok) {
                const data = await response.json();
                dispatch(setNotifications(data));
            } else {
                // Dispatch an action to indicate fetch failure
                dispatch({ type: types.FETCH_NOTIFICATIONS_FAILURE })
            }
        } catch (error) {
            // Handle other error scenarios if needed and dispatch accordinglt
            dispatch({ type: ERROR})
        } finally {
            dispatch(setLoadingState(false));
        }
    };
}