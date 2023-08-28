import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem'; // Import NotificationItem

describe('Notifications', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should render NotificationItem elements', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(NotificationItem)).toHaveLength(3); // Assuming there are 3 NotificationItems
  });

  it('should render the correct HTML in the first NotificationItem', () => {
    const wrapper = shallow(<Notifications />);
    const firstNotificationItem = wrapper.find(NotificationItem).first(); // Get the first NotificationItem
    const htmlContent = firstNotificationItem.prop('html'); // Get the html prop
    expect(htmlContent.__html).toEqual('<strong>Urgent requirement</strong> - complete by EOD');
  });
});
