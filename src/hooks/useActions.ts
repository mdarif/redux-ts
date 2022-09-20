import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';

export const useActions = () => {
  /**
   * useDispatch() is a hook that allows us to dispatch actions to the store.
   */
  const dispatch = useDispatch();

  /**
   * bindActionCreators
   *
   * Turns an object whose values are action creators, into an object with the same keys,
   * but with every action creator wrapped into a dispatch call so they may be invoked directly.
   *
   * The only use case for bindActionCreators is when you want to pass some action creators
   * down to a component that isn't aware of Redux, and you don't want to pass dispatch or
   * the Redux store to it.
   */
  return bindActionCreators(actionCreators, dispatch);
};
