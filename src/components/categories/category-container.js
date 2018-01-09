import React from 'react';

import {connect} from 'react-redux';

import CategoryCreate from './category-create';
import CategoryDisplay from './category-display';
import CategoryUpdate from './category-update';
import {categoryCreate, categoryDelete, categoryToggle, categoryUpdate} from '../../app/category-actions';
import * as expense from '../../app/expense-actions';

class Categories extends React.Component {

  constructor(props) {
    super(props);
    console.log('Initial Props', props);
  }

  categoryRender = () => {
    return this.props.state.category.map( (category,i) => {
      return (category.updating) ?
      <CategoryUpdate key={i} category={category} update={this.props.updateCategory} toggle={this.props.categoryToggle} /> :
      <CategoryDisplay key={i} category={category} deleteCategory={this.props.deleteCategory} toggle={this.props.categoryToggle} />
    } )
  }

  render() {
    return (
      <div>
        <CategoryCreate createCategory={this.props.createCategory}/>
        {this.categoryRender()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  state
});

const mapDispatchToProps = (dispatch, getState) => ({
  createCategory: category => dispatch(categoryCreate(category)),
  deleteCategory: _id => dispatch(categoryDelete(_id)),
  categoryToggle: _id => dispatch(categoryToggle(_id)),
  updateCategory: payload => dispatch(categoryUpdate(payload)),
  createExpense: expense => dispatch(expense.createExpense(expense)),
  deleteExpense: _id => dispatch(expense.deleteExpense(_id)),
  expenseToggle: _id => dispatch(expense.expenseToggle(_id)),
  updateExpense: payload => dispatch(expense.updateExpense(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
