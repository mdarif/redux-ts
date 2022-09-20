import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

/**
 * createStore(reducer, [preloadedState], [enhancer])
 * Creates a Redux store that holds the complete state tree of your app.
 * There should only be a single store in your app.
 *
 * Returns:
 * (Store): An object that holds the complete state of your app.
 * The only way to change its 'state' is by dispatching actions.
 * You may also subscribe to the changes to its state to update the UI.
 *
 * reducer (Function): A reducing function that returns the next state tree,
 * given the current state tree and an action to handle.
 */

// Create a new Redux store with the `createStore` function,
// and use the `reducer` for the update logic

export const store = createStore(reducers, {}, applyMiddleware(thunk));
