import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem component', () => {
    it('calls markAsRead with the correct ID when clicked', () => {
        // Mock the markAsRead function using a spy
        const markAsReadSpy = jest.fn();

        const notification = {
            id: 1,
            type: "info",
            value: "Notification 1",
        };

        const wrapper = shallow(
            <NotificationItem
            id={notification.id}
            type={notification.type}
            value={notification.value}
            markAsRead={markAsReadSpy} // Pass the spy as a prop
            />);

            // Simulate a click on the NotificationItem
            wrapper.find('li').simulate('click');

            // Expect markAsRead to be called with the correct ID
            expect(markAsReadSpy).toHaveBeenCalledWith(notification.id);
    });
});
