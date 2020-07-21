import { getToken, getTrivia } from '../../service/api';

export const REQUEST_TOKEN = 'REQUEST_TOKEN';
export const RECEIVE_TOKEN = 'RECEIVE_TOKEN';
export const REQUEST_TRIVIA = 'REQUEST_TRIVIA';
export const RECEIVE_TRIVIA = 'RECEIVE_TRIVIA';

const requestToken = () => ({
  type: REQUEST_TOKEN,
});

const receiveToken = (token) => ({
  type: RECEIVE_TOKEN,
  token,
});

const requestTrivia = () => ({
  type: REQUEST_TRIVIA,
});

const receiveTrivia = (trivia) => ({
  type: RECEIVE_TRIVIA,
  trivia,
});

function fetchToken() {
  return (dispatch) => {
    dispatch(requestToken());
    return getToken().then((data) => dispatch(receiveToken(data.token)));
  };
}

function fetchTrivia() {
  return (dispatch) => {
    dispatch(requestTrivia());
    return getTrivia(JSON.parse(localStorage.token)).then((data) => dispatch(receiveTrivia(data.results)));
  };
}

export { fetchToken, fetchTrivia };
