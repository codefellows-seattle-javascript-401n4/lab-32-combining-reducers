import {combineReducers} from 'redux';

import categoryReducer from '../components/categories/category-reducer';
import expenceReducer from '../components/expences/expence-reducer';


export default combineReducers({
    categories: categoryReducer,
    expences: expenceReducer
});