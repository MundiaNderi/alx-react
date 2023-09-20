import { selectCourse, unSelectCourse } from "./courseActionCreators";
import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

describe('selectCourse action creator', () => {
    it('should create an action to select a course', () => {
        const index = 1;
        const expectedAction = {
            type: SELECT_COURSE,
            index,
        };
        expectedAction(selectCourse(index)).toEqual(expectedAction);
    });
});

describe('unSelectCourse action creator', () => {
    it('should create an action to unselect a course', () => {
        const index = 1;
        const expectedAction = {
            type: UNSELECT_COURSE,
            index,
        };

        expectedAction(unSelectCourse(index)).toEqual(expectedAction);
    });
});