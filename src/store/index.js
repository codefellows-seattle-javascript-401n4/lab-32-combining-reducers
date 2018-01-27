import { createStore, combineReducers } from 'redux';

import categoryReducer from './categories/reducer';
import expenseReducer from './expenses/reducer';

const reducer = combineReducers({
  categories: categoryReducer,
  expenses: expenseReducer,
});

export default () => createStore(reducer);
