import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow component', () => {
  it('renders a regular row with correct background color', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={false} textFirstCell="Course Name" textSecondCell="Credit" />
    );

    // Check if the tr element has the correct background color
    expect(wrapper.find('tr').prop('style')).toHaveProperty('backgroundColor', '#f5f5f5ab');
  });

  it('renders a header row with correct background color', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="Department" textSecondCell="Course" />
    );

    // Check if the tr element has the correct background color
    expect(wrapper.find('tr').prop('style')).toHaveProperty('backgroundColor', '#deb5b545');
  });

  it('renders a regular row with "null" for textSecondCell when textSecondCell is null', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={false} textFirstCell="Course Name" textSecondCell={null} />
    );

    // Check if the second cell contains "null"
    expect(wrapper.find('td').at(1).text()).toBe('null');
  });
});
