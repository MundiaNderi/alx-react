import React, { Component } from 'react';

const Withlogging = (WrappedComponent) => {
    class WithloggingComponent extends Component {
        componentDidMount() {
            const componentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
            console.log('Component ${componentName} is mounted on componentDidMount()');
        }

        componentWillUnmount() {
            const componentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
            console.log('Component ${componentName} is going to unmount on componentWillUnmount()');
        }

        render() {
            return <WrappedComponent {...this.props} />
        }
    }

    WithLoggingComponent.displayName = `WithLogging(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

    return WithloggingComponent;
};

export default Withlogging;