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
});
