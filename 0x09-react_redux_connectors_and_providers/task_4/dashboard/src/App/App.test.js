import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store"; // Import redux-mock-store

// Create a mock store
const mockStore = configureStore([]);

describe("App tests", () => {
  it("renders without crashing", () => {
    const store = mockStore({
      ui: {
        isNotificationDrawerVisible: false,
        isUserLoggedIn:false,
        user: {},
      },
    });

    const component = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    )

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

  it("should render Footer Component", () => {
    const component = shallow(<App />);
    expect(component.contains(<Footer />)).toBe(true);
  });

  it("does not render courselist if logged out", () => {
    const component = shallow(<App isLoggedIn={false} />);
    expect(component.contains(<CourseList />)).toBe(false);
  });

  it("renders courselist if logged in", () => {
    const component = shallow(<App isLoggedIn={true} />);
    expect(component.containsMatchingElement(<CourseList />)).toEqual(true);
    expect(component.contains(<Login />)).toBe(false);
  });

  it("has default state for displayDrawer as false", () => {
    const component = shallow(<App />);
    expect(component.prop("displayDrawer")).toEqual(false);
  });
});
