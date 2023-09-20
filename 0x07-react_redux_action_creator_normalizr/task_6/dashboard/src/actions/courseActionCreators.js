import { bindActionCreators } from 'redux';
import { selectCourse, unSelectCourse } from './courseActionCreators';

export const boundSelectCourse = bindActionCreators(selectCourse, store.dispatch);
export const boundunSelectCourse = bindActionCreators(unSelectCourse, store.dispatch);