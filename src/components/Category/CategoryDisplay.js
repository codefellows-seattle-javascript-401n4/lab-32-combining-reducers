import React from 'react';
import ReactDom from 'react-dom';

import ExpenseDisplay from '../Expense/ExpenseDisplay';
import ExpenseCreate from '../Expense/ExpenseCreate';

class CategoryDisplay extends React.Component {
    constructor(props) {
        super(props);
    }
    expenseDisplay = () => {
        return Object.keys(this.props.category.expenses).map(expense_key => {
            return <ExpenseDisplay key={expense_key}/>;
        });
    }

    toggle = () => {

        this.props.actions.toggleCategoryUpdate(this.props.category.id);
    }
    deleteThis = () => {

        this.props.actions.deleteCategory(this.props.category.id);
    }

    render() {
        return (
            <div>
            <p>Category Name: {this.props.category.name}</p>
            <p>Category Budget: {this.props.category.budget}</p>

            <button onClick={this.toggle}>Update Category</button>
            <button onClick={this.deleteThis}>Delete Category</button>
            <br />
            Expenses:
            <br />
            {this.expenseDisplay()}
            <br />
            <ExpenseCreate categoryID={this.props.category.id} createExpense={this.props.actions.addExpense}/>
        </div>
        )
    }
}

export default CategoryDisplay;