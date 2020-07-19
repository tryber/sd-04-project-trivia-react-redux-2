import { REQUEST_TOKEN, RECEIVE_TOKEN } from '../actions/apiActions';
import saveToken from '../../util/localStorage';

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
      saveToken('token', action.token);
      return {
        ...state,
        token: action.token,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default dataReducer;
