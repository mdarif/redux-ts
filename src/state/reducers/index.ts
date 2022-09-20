import { combineReducers } from 'redux';

import repositoriesReducer from './respositoriesReducer';

/**
 * combineReducers
 *
 * combineReducers accepts an object where the key names will become
 * the keys in your root state object, and the values are the slice
 * reducer functions that know how to update those slices of the
 * Redux state.
 *
 * Remember, the 'key' names you give to combineReducers decides what
 * the 'key' names of your state object will be!
 */

const reducers = combineReducers({
  repositories: repositoriesReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
