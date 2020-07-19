import getToken from '../../service/api';

export const REQUEST_TOKEN = 'REQUEST_TOKEN';
export const RECEIVE_TOKEN = 'RECEIVE_TOKEN';

const requestToken = () => ({
  type: REQUEST_TOKEN,
});

const receiveToken = (token) => ({
  type: RECEIVE_TOKEN,
  token,
});

function fetchToken() {
  return (dispatch) => {
    dispatch(requestToken());
    return getToken().then((data) => dispatch(receiveToken(data.token)));
  };
}

export default fetchToken;
