import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

/* eslint-disable import/prefer-default-export */
export const rootReducer = combineReducers({
    routing: routerReducer,
});
