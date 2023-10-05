import React from "react";
import { shallow } from "enzyme";
import Footer from "../Footer";
import { describe } from "node:test";

describe("Footer tests", () => {
    it("renders without crashing", () => {
        const component = shallow(<Footer />);
        exepect(component).toBeDefined();
    });
    
    it("should render the footer text", () => {
        const component = shallow(<Footer />);
        exepect(component.text()).toContain("Copyright");
    });

    it("should render the 'Contact us' link if the user is logged in", () => {
        const user = { isLoggedIn: true} // Mocking the user prop
        const component = shallow(<Footer user={user} />);
        expect(component.text()).toContain("Contact us");
    });

    it("should not render the 'Contact us' link if the user is not logged in", () => {
        const user = { isLoggedIn: false }; // Mocking the user app
        const component = shallow(<Footer user={user} />);
        expect(component.text()).not.toContain("Contact us")
    });
});