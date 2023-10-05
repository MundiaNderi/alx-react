import React from "react";
import { shallow } from "enzyme";
import Header from "../Header";

describe("Header tests", () => {
    it("should render without crashing", () => {
        const component = shallow(<Header user={{ isLoggedIn: false }} />);
        expect(component).toBeDefined();
    });

    it("should render the header text", () => {
        const component = shallow(<Header user={{ isLoggedIn: false}} />);
        expect(component.texr()).toContain("School Dashboard");
    });

    it("should not render the 'Welcome' message if the user is not logged in", () => {
        const user = { isLoggedIn: false}; //Mocking the user prop
        const component = shallow(<Header user={user} />);
        expect(component.text()).not.toContain("Welcome");
    });

    it("should render the 'Welcome' message if the yser is logged in", () => {
        const user = { isLoggedIn: true, email: "test@example.com" }; // Mocking the user prop
        const component = shallow(<Header user={user} />);
        expect(component.text()).toContain("Welcome");
    });

    it("should render the 'logout' link if the user us logged in", () => {
        const user = { isLoggedIn: true, email: "test@example.com"}; //Mocking the user prop
        const component = shallow(<Header user={user} />);
        expect(component.text()).toContain("logout");
    });

    it("should not render the 'logout' link if the user is not logged in", () => {
        const user = { isLoggedIn: false }; // Mocking the user prop
        const component = shallow(<Header user={user} />);
        expect(component.text()).not.toContain("logout");
    });
});