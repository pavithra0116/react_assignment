import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Rel_prodReducer from "./reducers/Rel_prodReducer";
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { getProductsWatcher } from "./sagas";
import { createLogger } from "redux-logger"

let sagaMiddleware = createSagaMiddleware();
const store = createStore(
    Rel_prodReducer,
    applyMiddleware(sagaMiddleware, createLogger())
);
sagaMiddleware.run(getProductsWatcher);
store.subscribe(() => {
    console.log("store updated", store.getState());
})
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
    , document.getElementById('root'));