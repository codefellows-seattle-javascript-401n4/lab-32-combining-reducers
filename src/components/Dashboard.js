import React from 'react';
import ReactDom from 'react-dom';

import {connect} from 'react-redux';

import {category_create, category_update, category_delete, category_toggle} from '../actions/category-action';
import {expense_create, expense_update, expense_destroy} from '../actions/expense-action';

import CategoryCreate from './CategoryCreate.js';
import CategoryDisplay from './Category/CategoryDisplay.js';
import CategoryUpdate from './Category/CategoryUpdate.js';


class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    categoryDisplay = () => {

        if (this.props.state.categories.length > 0) {
            return this.props.state.categories.map(category => {
                return (category.updating) ? 
                    <CategoryUpdate toggleCategory={this.props.category.toggleCategoryUpdate} updateCategory={this.props.category.updateCategory} key={category.id}/> :
                    <CategoryDisplay toggleCategory={this.props.category.toggleCategoryUpdate} category={category} key={category.id}/>
            });
        }
    }

    // CategoryForm for creating categories

    // ExpenseForm for creating expenses. 

    render() {
        return (
            <div>
                <CategoryCreate addCategory={this.props.category.addCategory}/>
                <br />
                Your Categories: 
                <br />
                {this.categoryDisplay()}
            </div>
        )
    }

}

const mapStateToProps = state => ({
    state
});

const mapDispatchToProps = (dispatch, getState) => ({
    category: {
        addCategory: category => dispatch(category_create(category)),
        updateCategory: category => dispatch(category_update(category)),
        deleteCategory: category => dispatch(category_delete(category)),
        toggleCategoryUpdate: category => dispatch(category_toggle(category))
    },
    expense: {
        addExpense: expense => dispatch(expense_create(expense)),
        updateExpense: expense => dispatch(expense_update(expense)),
        deleteExpense: expense => dispatch(expense_destroy(expense))
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);