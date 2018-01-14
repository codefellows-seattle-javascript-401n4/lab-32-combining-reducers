'use strict';

import { combineReducers } from 'redux';
import catReducer from './catReducer.js';
import expensesReducer from './expensesReducer.js';


export default combineReducers({
  categories: catReducer,
  expenses: expensesReducer,
});
