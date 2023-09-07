import React 'react';
import { shallow } from 'enzyme'
import CourseListRow from './CourseListRow';

describe('CourseListRow component', () => {
    it('it renders a default row with textFirstCell and null textSecondCell', () => {
        const wrapper = shallow(<CourseListRow textFirstCell="Cell 1" textSecondCell={null} />);

        expect(wrapper.find('tr')).toHaveLength(1);
        expect(wrapper.find('th')).toHaveLength(0);
        expect(wrapper.find('td')).toHaveLength(2);

        expect(wrapper.find('td').at(0).text()).toBe('Cell 1');
        expect(wrapper.find('td').at(1).text()).toBe('null');
    });

    it('renders a default row with textFirstCell and non-null textSecondCell', () => {
        const wrapper = shallow(<CourseListRow textFirstCell="Cell 1" textSecondCell={'Cell 2'}/>);

        expect(wrapper.find('tr')).toHaveLength(1);
        expect(wrapper.find('th')).toHaveLength(0);
        expect(wrapper.find('td')).toHaveLength(2);
    });

    it('renders a header row with textFirstCell', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header Cell" />)

        expect(wrapper.find('tr')).toHaveLength(1);
        expect(wrapper.find('th')).toHaveLength(1);
        expect(wrapper.find('td')).toHaveLength(0);
    });

    it('renders a header with row textFirstCell and null textSecondCell', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header Cell" textSecondCell={null} />);

        expect(wrapper.find('tr')).toHaveLength(1);
        expect(wrapper.find('th')).toHaveLength(1);
        expect(wrapper.find('td')).toHaveLength(0);

        expect(wrapper.find('th').text()).toBe('Header Cell');
    });
});