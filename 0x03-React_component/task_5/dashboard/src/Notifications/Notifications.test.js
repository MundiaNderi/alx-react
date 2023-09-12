import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications component', () => {
  it('should not rerender when props are updated with the same list', () => {
    const notifications = [
      {
        id: 1,
        type: 'info',
        value: 'Notification 1'
      },
      {
        id: 2,
        type: 'warning',
        value: 'Notification 2'
      },
    ];

    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={notifications} />);

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
        id: 1,
        type: 'info',
        value: 'Notification 1'
      },
    ];

    const updatedNotifications = [
      {
        id: 1,
        type: 'info',
        value: 'Notification 1',
      },
      {
        id: 2,
        type: 'warning',
        value: 'Notification 2'
      },
    ];

    const wrapper = shallow(
      <Notifications displayDrawer={true} listNotifications={initialNotifications} />
    );

    const shouldComponentUpdateSpy = jest.spyOn(
      Notifications.prototype,
      'shouldComponentUpdate'
    );

    // Update props with a longer list
    wrapper.setProps({ displayDrawer: false, listNotifications: updatedNotifications });

    // Expect shouldComponentUpdate to have been called
    expect(shouldComponentUpdateSpy).toHaveBeenCalled();

    shouldComponentUpdateSpy.mockRestore();
  });
});
