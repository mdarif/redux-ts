import { ActionType } from '../action-types';
import { Action } from '../actions';

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[]; // Array of string
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

/**
 *
 * reducer
 *
 * A 'reducer' is a function that receives the current `state` and an `action`
 * object, decides how to update the state if necessary, and returns the new
 * state: `(state, action) => newState`.
 *
 * You can think of a reducer as an event listener which handles events based
 * on the received action (event) type.
 *
 * Do not put API calls into reducers.
 */

const reducer = (
  state: RepositoriesState = initialState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      // 100% certain that 'action' is SearchRepositoriesSuccessAction only
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
