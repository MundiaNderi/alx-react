import React from 'react';
import { shallow } from "enzyme";
import Notifications from "./Notifications";

describe("Notifications component", () => {
    it("calls markAsRead with the correct message when NotificationItem is clicked", () => {
        // Mock the console.log function
        const consoleLogSpy = jest.spyOn(console, "log").mockImplementation(() => {});

        const notifications = [
            {
                id: 1,
                type: "info",
                value: "Notification 1"
            },
            {
                id: 2,
                type: "warning",
                value: "Notification 2",
            },
        ];

        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={notifications} />);

        // Find the first NotificationItem component in the rendered output
        const notificationItem = wrapper.find ("NotificationItem").first();

        // Simulate a click on the NotificationItem
        notificationItem.props().markAsRead(1);

        // Expect markAsRead to be called with the correct message
        expect(consoleLogSpy).toHaveBeenCalledWith("Notification 1 has been marked as read");

        // Restore the original console.log function
        consoleLogSpy.mockRestore();
    });
});
