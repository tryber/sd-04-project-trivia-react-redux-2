import {combineReducers} from 'redux'
import dataReducer from './apiReducers';
import playerReducer from './playerReducer';

const rootReducer = combineReducers({dataReducer, playerReducer});

export default rootReducer;
