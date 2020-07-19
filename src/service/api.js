const TOKEN_URL = 'https://opentdb.com/api_token.php?command=request';

const getToken = () =>
  fetch(TOKEN_URL).then((res) =>
    res.json().then((json) => (res.ok ? Promise.resolve(json) : Promise.reject(json))),
  );

export default getToken;
