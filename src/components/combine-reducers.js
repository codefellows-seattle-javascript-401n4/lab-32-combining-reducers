import { combineReducers } from 'redux';
import CategoryReducer from './reducers/category-reducer';
import ExpenseReducer from './reducers/expense-reducer';

export default combineReducers({
  category: CategoryReducer,
  expense: ExpenseReducer
});
