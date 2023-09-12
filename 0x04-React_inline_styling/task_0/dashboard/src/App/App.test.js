import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Login from './Login';
import CourseList from '../CourseList/CourseList';

describe('App component', () => {
  it('should not display CourseList when isLoggedIn is false', () => {
    const wrapper = shallow(<App isLoggedIn={false} />);
    expect(wrapper.find(CourseList)).toHaveLength(0);
  });

  describe('when isLoggedIn is true', () => {
    it('should not include Login component', () => {
      const wrapper = shallow(<App isLoggedIn={true} />);
      expect(wrapper.find(Login)).toHaveLength(0);
    });

    it('should include CourseList component', () => {
      const wrapper = shallow(<App isLoggedIn={true} />);
      expect(wrapper.find(CourseList)).toHaveLength(1);
    });
  });

  it('should call logOut function and display alert when Control and H keys are pressed', () => {
    const mockLogOut = jest.fn();
    window.alert = jest.fn();

    const wrapper = shallow(<App isLoggedIn={true} logOut={mockLogOut} />);
    const event = new KeyboardEvent('keydown', {
      key: 'h',
      ctrlKey: true,
    });
    document.dispatchEvent(event);

    expect(mockLogOut).toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledWith('Logging you out');

    // Clean up mocks
    mockLogOut.mockRestore();
    window.alert.mockRestore();
  });
});
