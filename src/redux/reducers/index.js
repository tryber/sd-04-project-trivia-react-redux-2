import { combineReducers } from 'redux';
import dataReducer from './apiReducer';

const rootReducer = combineReducers({ dataReducer });

export default rootReducer;
