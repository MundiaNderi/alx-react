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
import { describe } from "node:test";

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
    expect(component.containsMatchingElement(<Notifications />)).toEqual(true);
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
    component.setProps({ isLoggedIn: false });
    expect(component.contains(<CourseList />)).toBe(false);
  });

  it("renders courselist if logged in", () => {
    const component = shallow(<App />);
    component.setProps({ isLoggedIn: true });
    expect(component.containsMatchingElement(<CourseList />)).toEqual(true);
    expect(component.contains(<Login />)).toBe(false);
  });

  it("changes displayDrawer state to true when calling displayNotificationDrawer", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.prop("displayDrawer")).toEqual(false);
    wrapper.prop("displayNotificationDrawer")();
    expect(wrapper.prop("displayDrawer")).toEqual(true);
  });

  it("changes displayDrawer state to false when calling hideNotificationDrawer", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.prop("displayDrawer")).toEqual(false);
    wrapper.prop("displayNotificationDrawer")();
    expect(wrapper.prop("displayDrawer")).toEqual(true);
    wrapper.prop("hideNotificationDrawer")();
    expect(wrapper.prop("displayDrawer")).toEqual(false);
  });

  it("calls logOut function when pressing ctrl + h", () => {
    const logOutSpy = jest.fn();
    const wrapper = mount(<App />);
    wrapper.setProps({ isLoggedIn: true });
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
    expect(wrapper.prop("displayDrawer")).toEqual(false);
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
    wrapper.instance().markNotificationAsRead(notificationId);
    const updatedNotifications = wrapper.state().listNotifications;
    expect(
      updatedNotifications.some((notification) => notificationId === notificationId)
    ).toBe(false);
    for (const notification of initialNotifications) {
      if (notificationId !== notificationId) {
        expect(updatedNotifications).toContainEqual(notification);
      }
    }
  });
});
