import { index } from "cheerio/lib/api/traversing";
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from "../courseActionTypes";
import { result } from "lodash";

// Update the initial state to use an Immutable.js Map
const initialState = Map({
    courses: {}, // This is where the normalized data will be stored
});


const courseReducer = ( state = initialState, action) => {
    switch (action.type) {
        case FETCH_COURSE_SUCCESS :
        // Normalize the data and merge it with the state using setIn
        const normalizedData = action.data.reduce((result, course) => {
            return result.setIn(['courses', course.id], Map({...course, isSelected: false}));
        }, state);

        return normalizedData;

        case SELECT_COURSE:
            // Use the setin function to update the isSelected property
            return state.setIn(['courses', action.index, 'isSelected'],  true);

        case UNSELECT_COURSE:
            // Use the setIn function to update the isSelected property
            return state.setIn(['courses', action.index, 'isSelected'], false);

        default:
            return state;
    }
};

export default courseReducer;