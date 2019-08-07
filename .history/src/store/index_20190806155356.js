import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import * as reducers from './reducers';

console.log(reducers);

const configureStore = (preloadedState) => {
    const middlewares = [thunk]
    const middlewareEnhancer = applyMiddleware(...middlewares)

    const enhancers = [middlewareEnhancer];
    // for chrome devtools
    const composedEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)(enhancers);

    const rootReducer = combineReducers(reducers);

    const store = createStore(rootReducer, preloadedState, composedEnhancers)

    return store;
}

export default configureStore;