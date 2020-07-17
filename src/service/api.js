const TOKEN_URL = 'https://opentdb.com/api_token.php?command=request';
const TRIVIA_URL = 'https://opentdb.com/api.php?amount=5&token=';

export async function getToken() {
  return fetch(TOKEN_URL).then((res) =>
    res.json().then((json) => (res.ok ? Promise.resolve(json) : Promise.reject(json))),
  );
}

export async function getTrivia(token) {
  return fetch(TRIVIA_URL).then((res) =>
    res.json().then((json) => (res.ok ? Promise.resolve(json) : Promise.reject(json))),
  );
}
