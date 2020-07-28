import { combineReducers } from 'redux';
import dataReducer from './apiReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({ dataReducer, userReducer });

export default rootReducer;
