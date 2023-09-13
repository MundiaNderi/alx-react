/**
 * @jest-environment jsdom
 */
import React from "react";
import App from "./App";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";
import { shallow, mount } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("App tests", () => {
  it("renders without crashing", () => {
    const component = shallow(<App />);

    expect(component).toBeDefined();
  });
  
  it("should render Notifications component", () => {
    const component = shallow(<App />);

    expect(component.containsMatchingElement(<Notifications />)).toEqual(false);
  });
  
  it("should render Header component", () => {
    const component = shallow(<App />);

    expect(component.contains(<Header />)).toBe(true);
  });
  
  it("should render Login Component", () => {
    const component = shallow(<App />);

    expect(component.contains(<Login />)).toBe(true);
  });
  
  it("should render Footer Component", () => {
    const component = shallow(<App />);

    expect(component.contains(<Footer />)).toBe(true);
  });

  it("does not render courselist if logged out", () => {
    const component = shallow(<App />);

    component.setState({ isLoggedIn: false });

    expect(component.contains(<CourseList />)).toBe(false);
  });

  it("renders courselist if logged in", () => {
    const component = shallow(<App />);
    component.setState({ isLoggedIn: true });

    expect(component.containsMatchingElement(<CourseList />)).toEqual(true);
    expect(component.contains(<Login />)).toBe(false);
  });

  it("changes displayDrawer state to true when calling handleDisplayDrawer", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toEqual(false);

    wrapper.instance().handleDisplayDrawer();

    expect(wrapper.state().displayDrawer).toEqual(true);
  });

  it("changes displayDrawer state to false when calling handleHideDrawer", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toEqual(false);

    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).toEqual(true);

    wrapper.instance().handleHideDrawer();

    expect(wrapper.state().displayDrawer).toEqual(false);
  });

  it("calls logOut function when pressing ctrl + h", () => {
    const logOutSpy = jest.fn();
    const wrapper = mount(<App />);
    wrapper.setState({ isLoggedIn: true });
    wrapper.instance().logOut = logOutSpy;
    const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
    document.dispatchEvent(event);

    expect(logOutSpy).toHaveBeenCalled();
    wrapper.unmount();
  });

  it("calls alert when pressing ctrl + h", () => {
    const alertSpy = jest.spyOn(window, "alert");
    const wrapper = mount(<App />);
    const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
    document.dispatchEvent(event);

    expect(alertSpy).toHaveBeenCalled();
    wrapper.unmount();
  });

  it('checks that alert displays "Logging you out" when pressing ctrl + h', () => {
    const alertSpy = jest.spyOn(window, "alert");
    const wrapper = mount(<App />);
    const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
    document.dispatchEvent(event);

    expect(alertSpy).toHaveBeenCalledWith("Logging you out");
    jest.restoreAllMocks();
    wrapper.unmount();
  });

  it("has default state for displayDrawer as false", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toEqual(false);
  });

  it("updates state correctly when calling logIn function", () => {
    const wrapper = shallow(<App />);
    wrapper.instance().logIn("test@example.com", "password");

    expect(wrapper.state().user).toEqual({
      email: "test@example.com",
      password: "password",
      isLoggedIn: true,
    });
  });

  it("updates state correctly when calling logOut function", () => {
    const wrapper = shallow(<App />);
    wrapper.instance().logOut();

    expect(wrapper.state().user).toEqual({
      email: "",
      password: "",
      isLoggedIn: false,
    });
  });

  it("marks notification as read when calling markNotificationAsRead function", () => {
    const wrapper = shallow(<App />);
    const notificationId = 2; 
    const initialNotifications = wrapper.state().listNotifications;

    // Call the markNotificationAsRead with the Notification ID
    wrapper.instance().markNotificationAsRead(notificationId);

    // Get the updated list of notifications
    const updatedNotifications = wrapper.state().listNotifications;

    // Verify that the notification with the specified ID is removed
    expect(updatedNotifications.some(notification => notificationId === notificationId)).toBe(false);

    // Verify that the other notifications are unchanged
    for (const notification of initialNotifications) {
        if (notificationId !== notificationId) {
            expect(updatedNotifications).toContainEqual(notification);
        }
    }
  });
});
