import { PLAYER_DATA } from '../actions/userAction';
import saveSingleInfo from '../../util/localStorage';

const INITIAL_STATE = {
  name: '',
  assertions: '',
  score: 0,
  gravatarEmail: '',
};

const playerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PLAYER_DATA:
      saveSingleInfo('state', { player: { name: action.name, gravatarEmail: action.email } });
      return {
        ...state,
        name: action.name,
        gravatarEmail: action.email,
      };
    default:
      return state;
  }
};

export default playerReducer;
