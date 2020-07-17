import {
  REQUEST_TOKEN,
  RECEIVED_TOKEN,
  REQUEST_TRIVIA,
  RECEIVED_TRIVIA,
} from '../actions/apiActions';
import saveToken from '../util/localStorage';


const INITIAL_STATE = {
  isFetching: false,
  token: {},
  trivia: {},
};

const dataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_TOKEN:
      console.log(action)
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVED_TOKEN:
      console.log(action)
      saveToken('token', action.token)
      return {
        ...state,
        isFetching: false,
        token: action.token,
      };
    case REQUEST_TRIVIA:
      console.log(action)
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVED_TRIVIA:
      console.log(action)
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
