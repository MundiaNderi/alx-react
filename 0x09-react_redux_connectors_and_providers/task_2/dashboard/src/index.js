import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from 'redux';  // Import createStore from Redux
import { Provider } from 'react-redux';  // Import Provider from react-redux
import App from './App/App';
import uiReducer from './reducers/uiReducer'; // Import your uiReducer;
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'; // Import composeWithDevTools


// Create the Redux store with your uiReducer and apply the thunk middleware
const store = createStore(
    uiReducer,
    composeWithDevTools(applyMiddleware(thunk))
);


// Wrap your App component with the Provider and pass the store as a prop
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)