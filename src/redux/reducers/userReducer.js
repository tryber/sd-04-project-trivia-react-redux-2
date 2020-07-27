import { PLAYER_DATA, CORRECT_ANSWER } from '../actions/userAction';
import addInfo from '../../util/localStorage';

const INITIAL_STATE = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
};

const playerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PLAYER_DATA:
      addInfo('state', { player: { ...state, name: action.name, gravatarEmail: action.email } });
      return {
        ...state,
        name: action.name,
        gravatarEmail: action.email,
      };
    case CORRECT_ANSWER:
      addInfo('state', {
        player: {
          ...state,
          score: state.score + action.score,
          assertions: state.assertions + 1,
        },
      });
      return {
        ...state,
        score: state.score + action.score,
        assertions: state.assertions + 1,
      };
    default:
      return state;
  }
};

export default playerReducer;
