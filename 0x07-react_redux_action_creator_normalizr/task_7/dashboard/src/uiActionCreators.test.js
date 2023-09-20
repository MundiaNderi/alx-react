import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as types from './uiActionTypes';
import { loginRequest } from './uiActionCreators';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('loginRequest action', () => {
    afterEach(() => {
        fetchMock.restore();
    });

    it('should dispacth LOGIN_SUCCESS when API call is successful', () => {
        fetchMock.getOnce('../dist/login-success.json', { status: 200, body: {} });

        const expectedActions = [
            { type: types.LOGIN },
            { type: types.LOGIN_SUCCESS },
        ];

        const store = mockStore({});

        return store.dispatch(loginRequest('test@exaple.com', 'password')).then(() => {
            expectedActions(store.getActions()).toEqual(expectedActions);
        });
    });

    it('should dispatch LOGIN_FAILURE when API call fails', () => {
        fetchMock.getOnce('../dist/login-success.json', { status: 500 });

        const expectedActions = [
            { type: types.LOGIN },
            { type: types.LOGIN_FAILURE},
        ];

        const store = mockStore({});

        return store.dispatch(loginRequest('test@example.com', 'password')).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});