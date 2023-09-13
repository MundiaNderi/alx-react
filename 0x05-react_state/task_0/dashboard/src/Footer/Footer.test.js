import { shallow } from "enzyme";
import React from "react";
import Footer from "./Footer";
import { getFullYear, getFooterCopy } from "../utils/utils";

describe("Footer test", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("should render the text Copyright", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).toEqual(`Copyright ${getFullYear()} - ${getFooterCopy()}`);
  });

  it("should not display the link when the user is logged out within the context", () => {
    const context = {
      user: {
        isLoggedIn: false,
      },
    };

    const wrapper = shallow(
      <AppContext.Provider value={context}>
        <Footer />
      </AppContext.Provider>
    );

    expect(wrapper.find("a").exist()).toEqual(false);
  });

  it("should display the link when the user is logged in within the context", () => {
    const context = {
      user: {
        isLoggedIn: true,
      },
    };

    const wrapper = shallow(
      <AppContext.Provider value={context}>
        <Footer />
      </AppContext.Provider>
    );

    expect(wrapper.find("a").exists()).toEqual(true);
  });
});