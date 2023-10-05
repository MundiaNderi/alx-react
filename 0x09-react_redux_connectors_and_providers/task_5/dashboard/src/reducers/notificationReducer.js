import { Map, List } from 'immutable';
import { notificationsNormalizer } from '../schema/notifications';
import { FETCH_NOTIFICATIONS_SUCCESSS, MARK_AS_READ, SET_TYPE_FILTER, SET_LOADING_STATE } from '../actions/notificationActionTypes';

const initialState = Map({
    filter: 'DEFAULT',
    notifications: List([]),
    loading: false,
});

const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_NOTIFICATIONS_SUCCESSS:
            // Normalize the data and merge it with the state using set and mergeDeep
            const normalizedData = notificationsNormalizer(action.data);
            return state
            .set('filter', 'DEFAULT')
            .set('loading', false)
            .mergeDeep(normalizedData);

            case MARK_AS_READ:
                //Use the setIn function to update the isRead property
                return state.setIn(['notifications', action.index, 'isRead'], true);
            
            case SET_TYPE_FILTER:
                // Use the set function to update the filter value
                return state.set('filter', action.filter);

            case SET_LOADING_STATE:
                // Set the loading state based on the action's payload
                return state.set('loading', action.isLoading);
                
            default:
                return state;
    }
};

export default notificationReducer;