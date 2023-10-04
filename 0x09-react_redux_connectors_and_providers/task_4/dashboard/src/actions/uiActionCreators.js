import * as types from './uiActionTypes';

export function displayNotificationDrawer() {
    return { type: types.DISPLAY_NOTIFICATION_DRAWER };
};

export function loginSuccess() {
    return { type: types.LOGIN_SUCCESS };
}

export function loginFailure() {
    return { type: types.LOGIN_FAILURE };
}

export function loginRequest(email, password) {
    return async (dispatch) => {
        dispatch({ type: types.LOGIN});

        try { 
            const response = await('../dist/login-success.json');
            if (response.ok) {
                dispatch(loginSuccess());
            } else {
                dispatch(loginFailure());
            }
        }
        catch(error) {
            dispatch(loginFailure());
        }
    };
}
