import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

export const selectCourse = (index) => ({
    type: SELECT_COURSE, index  // action creator is a function 
});

export const unSelectCourse = (index) => ({
    type: UNSELECT_COURSE,
    index,
})