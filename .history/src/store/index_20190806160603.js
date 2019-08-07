import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import jobsReducer from './reducers/jobs';
console.log(jobsReducer);

const configureStore = (preloadedState) => {
    const middlewares = [thunk]
    const middlewareEnhancer = applyMiddleware(...middlewares)

    const enhancers = [middlewareEnhancer];
    // for chrome devtools
    const composedEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)(...enhancers);

    const store = createStore(jobsReducer, preloadedState, composedEnhancers)

    return store;
}

export default configureStore;