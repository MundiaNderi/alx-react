import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications component', () => {
  it('should not rerender when props are updated with the same list', () => {
    const notifications = [
      {
        _id: 1, // Changed 'id' to '_id' to match the component's PropTypes
        type: 'info',
        value: 'Notification 1',
      },
      {
        _id: 2,
        type: 'warning',
        value: 'Notification 2',
      },
    ];

    const wrapper = shallow(
      <Notifications displayDrawer={true} listNotifications={notifications} />
    );

    const shouldComponentUpdateSpy = jest.spyOn(
      Notifications.prototype,
      'shouldComponentUpdate'
    );

    // Update props with the same list
    wrapper.setProps({ displayDrawer: false, listNotifications: notifications });

    // Expect shouldComponentUpdate not to have been called
    expect(shouldComponentUpdateSpy).not.toHaveBeenCalled();

    shouldComponentUpdateSpy.mockRestore();
  });

  it('should rerender when props are updated with a longer list', () => {
    const initialNotifications = [
      {
        _id: 1,
        type: 'info',
        value: 'Notification 1',
      },
    ];

    const updatedNotifications = [
      {
        _id: 1,
        type: 'info',
        value: 'Notification 1',
      },
      {
        _id: 2,
        type: 'warning',
        value: 'Notification 2',
      },
    ];

    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={initialNotifications}
      />
    );

    const shouldComponentUpdateSpy = jest.spyOn(
      Notifications.prototype,
      'shouldComponentUpdate'
    );

    // Update props with a longer list
    wrapper.setProps({
      displayDrawer: false,
      listNotifications: updatedNotifications,
    });

    // Expect shouldComponentUpdate to have been called
    expect(shouldComponentUpdateSpy).toHaveBeenCalled();

    shouldComponentUpdateSpy.mockRestore();
  });

  it('should call handleDisplayDrawer when menu item is clicked', () => {
    const handleDisplayDrawer = jest.fn();
    const wrapper = shallow(
      <Notifications
        displayDrawer={false}
        listNotifications={[]}
        handleDisplayDrawer={handleDisplayDrawer}
        handleHideDrawer={() => {}}
      />
    );

    wrapper.find('button').simulate('click');

    expect(handleDisplayDrawer).toHaveBeenCalled();
  });

  it('should call handleHideDrawer when close button is clicked', () => {
    const handleHideDrawer = jest.fn();
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={[]}
        handleDisplayDrawer={() => {}}
        handleHideDrawer={handleHideDrawer}
      />
    );

    wrapper.find('button[aria-label="Close"]').simulate('click');

    expect(handleHideDrawer).toHaveBeenCalled();
  });
});
