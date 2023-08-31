import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Login from './Login';
import CourseList from '../CourseList/CourseList';

describe ('App component', () => {
    it('should not display CourseList when isLoggedIn is false', () => {
        const wrapper = shallow(<App isLoggedIn={false} />);
        expect(wrapper.find(CourseList)).toHaveLength(0);
    });

    describe('when isLoggedIn is true', () => {
        it('it should not include Login component', () => {
            const wrapper = shallow(<App isLoggedIn={true} />);
            expect(wrapper.find(Login)).toHaveLength(0);
        });

        it('should include CourseList component', () => {
            const wrapper = shallow(<App isLoggedIn={true} />);
            expect(wrapper.find(CourseList)).toHaveLength(1);
        });
    });
});