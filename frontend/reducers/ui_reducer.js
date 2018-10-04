import {
  RECEIVE_ERRORS,
  CLEAR_ERRORS
} from '../actions/ui_actions';
import merge from 'lodash/merge';

const uiReducer = (state = { errors: [] }, action) => {
  let newState;
  switch(action.type){
    case RECEIVE_ERRORS:
      newState = merge({}, state);
      newState.errors = action.errors;
      return newState;
    case CLEAR_ERRORS:
      newState = merge({}, state);
      newState.errors = [];
      return newState;
    default:
      return state;
  }
};

export default uiReducer;
