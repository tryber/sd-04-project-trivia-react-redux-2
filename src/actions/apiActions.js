import {getToken, getTrivia} from '../service/api'

export const REQUEST_TOKEN = 'REQUEST_TOKEN';
export const RECEIVED_TOKEN = 'RECEIVED_TOKEN';
export const REQUEST_TRIVIA = 'REQUEST_TRIVIA';
export const RECEIVED_TRIVIA = 'RECEIVED_TRIVIA';

const requestToken = () => ({
  type: REQUEST_TOKEN,
});

const receiveToken = (token) => ({
  type: RECEIVED_TOKEN,
  token
});

const requestTrivia = () => ({
  type: REQUEST_TRIVIA,
});

const receiveTrivia = (trivia) => ({
  type: RECEIVED_TRIVIA,
  trivia
});


function fetchToken() {
  return (dispatch) => {
    dispatch(requestToken());
    return getToken().then((data) => dispatch(receiveToken(data.token)))
  }
}

function fetchTrivia() {
  return (dispatch) => {
    dispatch(requestTrivia());
    return getTrivia().then((data) => dispatch(receiveTrivia(data.results)))
  }
}


export { fetchToken, fetchTrivia };
