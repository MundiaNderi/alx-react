import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import WithLogging './WithLogging';

// Mock console.log
console.log = jest.fn();

// Test component to use with the high order component
const TestComponent = () => <p>Test Component</p>;
const WrappedComponent = WithLogging(TestComponent);

describe('WithLogging HOC', () => {
    let container = null;

    beforeEach(() => {
        // Set up a DOM element as a render target
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    afterEach(() => {
        // Clean up on exiting
        unmountComponentAtNode(container);
        container.remove()
    });

    it('should log when wrapped element is pure HTML', () => {
        render(<WrappedComponent />, container);

        // Assert that console.log was called on mount and unmount with the component name
        expect(console.log).toHaveBeenCalledWith('Component Login is mounted on componentDidMount');
        expect(console.log).toHaveBeenCalledWith('Component Login is going to unmount on ComponentWillUnmount');
    });
});