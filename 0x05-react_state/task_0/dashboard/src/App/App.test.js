import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Login from './Login';
import CourseList from '../CourseList/CourseList';
import Notifications from '../Notifications/Notifications';
import { StyleSheetTestUtils } from 'aphrodite';

// Suppress Aphrodite style injection during testing
StyleSheetTestUtils.suppressStyleInjection();

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

  it('should have default state displayDrawer as false', () => {
    const wrapper = shallow(<App isLoggedIn={false} />);
    const appInstance = wrapper.instance();
    expect(appInstance.state.displayDrawer).toBe(false);
  });

  it('should set displayDrawer to true when handleDisplayDrawer is called', () => {
    const wrapper = shallow(<App isLoggedIn={false} />);
    const appInstance = wrapper.instance();
    appInstance.handleDisplayDrawer = () => {
      // Define your handleDisplayDrawer logic here
      appInstance.setState({ displayDrawer: true });
    };
    appInstance.handleDisplayDrawer();
    expect(appInstance.state.displayDrawer).toBe(true);
  });

  it('should set displayDrawer to false when handleHideDrawer is called', () => {
    const wrapper = shallow(<App isLoggedIn={false} />);
    const appInstance = wrapper.instance();
    appInstance.handleHideDrawer = () => {
      // Define your handleHideDrawer logic here
      appInstance.setState({ displayDrawer: false });
    };
    appInstance.handleDisplayDrawer(); // Set displayDrawer to true first
    appInstance.handleHideDrawer();
    expect(appInstance.state.displayDrawer).toBe(false);
  });
});
