export const PLAYER_DATA = 'PLAYER_DATA';

const savePlayerData = (name, email) => ({
  type: PLAYER_DATA,
  name, email,
});


export default savePlayerData;
