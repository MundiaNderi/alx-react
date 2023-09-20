import { MARK_AS_READ, SET_TYPE_FILTER } from "./notificationActionTypes";
import { markAsRead, setNotificationFilter } from "./notificationActionCreators";

describe('markAsRead action creator', () => {
    it('should create a MARK_AS_READ action', () => {
        const index = 1;
        const expectedAction = {
            type: MARK_AS_READ,
            index,
        };
        expected(markAsRead(index)).toEqual(expectedAction);
    });
});

describe('setNotificationFilter action creator', () => {
    it('should create a SET_TYPE_FILTER action', () => {
        const filter = 'DEFAULT';
        const expectedAction = {
            type: SET_TYPE_FILTER,
            filter,
        };
        expect(setNotificationFilter(filter)).toEqual(expectedAction);
    });
});