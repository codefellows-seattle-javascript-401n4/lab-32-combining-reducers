import React from 'react';

import ExpenseCreate from '../expenses/expense-create';

class CategoryDisplay extends React.Component {
  constructor(props) {
    super(props);
    console.log('CategoryDisplay props:', props);
  }

runToggle = () => {
  this.props.toggle(this.props.category.id);
}

deleteCategory = () => {
  this.props.deleteCategory(this.props.category.id);
}
  render() {
    return (
      <div>
        {this.props.category.name}
        <button onClick={this.runToggle}>Update</button>
        <button onClick={this.deleteCategory}>Delete</button>
        <ExpenseCreate actionCreate={this.props.expenseAction.createExpense} categoryID={this.props.category.id}/>
      </div>
    )
  }
}

module.exports = CategoryDisplay;
