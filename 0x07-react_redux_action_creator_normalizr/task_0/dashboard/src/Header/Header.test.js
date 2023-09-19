import React from "react";
import Header from "./Header";
import { shallow } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("Header", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("should render a h1", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists("img")).toEqual(true);
    expect(wrapper.containsMatchingElement(<h1>School dashboard</h1>)).toEqual(true);
  });

  it("does not create logoutSection with default context", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists("#logoutSection")).toEqual(false);
  });

  it("creates logoutSection with user-defined context", () => {
    const user = { isLoggedIn: true, email: "test@example.com" };
    const wrapper = shallow(<Header />, { context: { user } });
    expect(wrapper.exists("#logoutSection")).toEqual(true);
  });

  it("calls logOut function when logoutSection is clicked", () => {
    const user = { isLoggedIn: true, email: "test@example.com" };
    const logOutSpy = jest.fn();
    const wrapper = shallow(<Header />, { context: { user, logOut: logOutSpy } });
    
    wrapper.find("#logoutSection").simulate("click");
    
    expect(logOutSpy).toHaveBeenCalled();
  });
});
