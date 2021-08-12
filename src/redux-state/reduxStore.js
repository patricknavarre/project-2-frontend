
import { createStore, compose, applyMiddleware } from 'redux';
import { reducer as applicationReducer } from '../application-state/applicationState';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



export const reduxStore = createStore(
	reducer,
	initialState,
	composeEnhancers(applyMiddleware(thunk))
);