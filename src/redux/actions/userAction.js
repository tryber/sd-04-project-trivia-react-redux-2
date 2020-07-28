export const PLAYER_DATA = 'PLAYER_DATA';
export const CORRECT_ANSWER = 'CORRECT_ANSWER';

const savePlayerData = (name, email) => ({
  type: PLAYER_DATA,
  name,
  email,
});

const correctAnswer = (score) => ({
  type: CORRECT_ANSWER,
  score,
});

export { savePlayerData, correctAnswer };
