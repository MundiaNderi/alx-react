import React from "react";
import { render } from "@testing-library/react";
import Notifications from "./Notifications";

describe("Notifications Component", () => {
  it("displays menu item when displayDrawer is false", () => {
    const { queryByText } = render(<Notifications displayDrawer={false} />);
    const menuItem = queryByText("Your notifications");
    expect(menuItem).toBeInTheDocument();
  });

  it("does not display div.Notifications when displayDrawer is false", () => {
    const { queryByTestId } = render(<Notifications displayDrawer={false} />);
    const notificationsDiv = queryByTestId("notifications");
    expect(notificationsDiv).not.toBeInTheDocument();
  });

  it("displays menu item when displayDrawer is true", () => {
    const { queryByText } = render(<Notifications displayDrawer={true} />);
    const menuItem = queryByText("Your notifications");
    expect(menuItem).toBeInTheDocument();
  });

  it("displays div.Notifications when displayDrawer is true", () => {
    const { queryByTestId } = render(<Notifications displayDrawer={true} />);
    const notificationsDiv = queryByTestId("notifications");
    expect(notificationsDiv).toBeInTheDocument();
  });

  it("renders correctly with an empty listNotifications or no prop", () => {
    const { queryByText, queryByTestId } = render(<Notifications />);
    const menuItem = queryByText("Your notifications");
    const notificationsDiv = queryByTestId("notifications");
    expect(menuItem).toBeInTheDocument();
    expect(notificationsDiv).not.toBeInTheDocument();
  });

  it("renders notifications correctly with a listNotifications prop", () => {
    const notifications = [
      { id: 1, html: { __html: "Notification 1" }, type: "default", value: "Notification 1" },
      { id: 2, html: { __html: "Notification 2" }, type: "urgent", value: "Notification 2" },
    ];
    const { queryByText } = render(<Notifications listNotifications={notifications} />);
    const notification1 = queryByText("Notification 1");
    const notification2 = queryByText("Notification 2");
    expect(notification1).toBeInTheDocument();
    expect(notification2).toBeInTheDocument();
  });

  it("displays the message 'No new notification for now' when listNotifications is empty", () => {
    const { queryByText } = render(<Notifications listNotifications={[]} />);
    const noNotificationMessage = queryByText("No new notification for now");
    expect(noNotificationMessage).toBeInTheDocument();
  });
});
