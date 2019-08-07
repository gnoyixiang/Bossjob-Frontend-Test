import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import jobsReducer from './store/reducers/jobs';

import configureStore from './store';
import App from './App';

import * as serviceWorker from './serviceWorker';

import './index.css';

const middlewares = [thunk]
const middlewareEnhancer = applyMiddleware(...middlewares)

const enhancers = [middlewareEnhancer];
// for chrome devtools
const composedEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)(enhancers);

ReactDOM.render((
    <Provider store={createStore(jobsReducer, composedEnhancers)}>
        <App />
    </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
