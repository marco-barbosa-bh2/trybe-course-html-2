import { COUNTUP } from '../actions/index';

const INITIAL_STATE = 0;

function clickCounterReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case COUNTUP:
      return state + action.value;
    default:
      return state;
  }
}

export default clickCounterReducer;