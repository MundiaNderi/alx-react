import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from "./CourseListRow";
import CourseList from "./CourseList";
import { render } from '@testing-library/react';

describe('CourseList Component', () => {
  it('renders CourseList component without crashing', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the 5 different rows', () => {
    const { getAllByText } = render(<CourseList />);
  
    
    expect(getAllByText(/Available courses|Course name|ES6|Webpack|React/)).toHaveLength(5);
  });

  it('renders correctly with an empty listCourses or no prop', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find(CourseListRow)).toHaveLength(0);
  });

  it('renders courses correctly with a listCourses prop', () => {
    const courses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];
    const wrapper = shallow(<CourseList listCourses={courses} />);
    expect(wrapper.find(CourseListRow)).toHaveLength(courses.length);
  });
  
  describe('CourseListRow', () => {
    it('renders one cell with colspan = 2 when isHeader is true and textSecondCell does not exist', () => {
      const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header Cell" />);
      const th = wrapper.find('th');
      expect(th.length).toBe(1);
      expect(th.props().colSpan).toBe('2');
      expect(th.text()).toBe('Header Cell');
    });

    it('renders two cells when isHeader is true and textSecondCell is present', () => {
      const wrapper = shallow(
        <CourseListRow isHeader={true} textFirstCell="Header Cell" textSecondCell="Second Cell" />
      );
      const th = wrapper.find('th');
      expect(th.length).toBe(2);
      expect(th.at(0).text()).toBe('Header Cell');
      expect(th.at(1).text()).toBe('Second Cell');
    });

    it('renders correctly two td elements within a tr element when isHeader is false', () => {
      const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="Cell 1" textSecondCell="Cell 2" />);
      const tr = wrapper.find('tr');
      const td = tr.find('td');
      expect(tr.length).toBe(1);
      expect(td.length).toBe(2);
      expect(td.at(0).text()).toBe('Cell 1');
      expect(td.at(1).text()).toBe('Cell 2');
    });
  });
});
