import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware} from 'redux';  // Import createStore from Redux
import { Provider } from 'react-redux';  // Import Provider from react-redux
import App from './App/App';
import uiReducer from './reducers/uiReducer'; // Import your uiReducer;
import thunk from "redux-thunk";

// Create the Redux store with your uiReducer and apply the thunk middleware
const store = createStore(uiReducer, applyMiddleware(thunk));

// Wrap your App component with the Provider and pass the store as a prop
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)