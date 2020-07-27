import {
  REQUEST_TOKEN,
  RECEIVE_TOKEN,
  REQUEST_TRIVIA,
  RECEIVE_TRIVIA,
} from '../actions/apiActions';
import addInfo from '../../util/localStorage';

const INITIAL_STATE = {
  isFetching: false,
  token: {},
  trivia: {},
};

const dataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_TOKEN:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_TOKEN:
      addInfo('token', action.token);
      return {
        ...state,
        token: action.token,
        isFetching: false,
      };
    case REQUEST_TRIVIA:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_TRIVIA:
      return {
        ...state,
        isFetching: false,
        trivia: action.trivia,
      };
    default:
      return state;
  }
};

export default dataReducer;
