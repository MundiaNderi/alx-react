import { shallow } from "enzyme";
import React from 'react';
import Login from './Login';
import { StyleSheetTestUtils } from 'aphrodite';
 
beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();  // eslint-disable-line no-undef
});

describe("Login component", () => {
    it(" should render without crashing", () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.exists()).toEqual(true);
    });

    it(" Should have 2 input tags and 2 label tags", () => {
        const wrapper=shallow(<Login/>);
        expect(wrapper.find("label")).toHaveLength(2);
        expect(wrapper.find("input")).toHaveLength(2)
    });

    it("Should have the submit button disbaled by default", () => {
        const wrapper = shallow(<Login />);
        const submitButton = wrapper.find("input[type='submit']");
        expect(submitButton.prop("disabled")).toEqual(true);
    });

    it("should enable the submit button after changing the input values",  () => {
        const wrapper = shallow(<Login />);
        const emailInput = wrapper.find("input[type='email']");
        const passwordInput = wrapper.find("input[type='password']");
        const submitButton = wrapper.find("input[type='submit']");

        // Simulate user input by changing the values of the email and password
        emailInput.simulate("change", { target: { value: "text@example.com" }});
        passwordInput.simulate("change", { target: { value : "password123" }});
        
        // Check if the submit button is enabled
        expect(submitButton.prop("disabled")).toEqual(false);
    });
});
