import React from 'react';
import {connect} from 'react-redux';
import CategoryForm from '../category-form';
import CategoryItem from '../category-item';
import ExpenseForm from '../expense-form';
import * as category from '../../action/category.js';
import * as expense from '../../action/expense.js';

class Dashboard extends React.Component{

  componentDidUpdate(){
    console.log(this.props.categories);
  };
 
  render(){
    return(
    <div className='dashboard'>
      <h1> goozgooz welcomes you </h1>
      <CategoryForm onComplete={this.props.categoryCreate}/>
      {this.props.categories.map((category,i) =>
        <div key={category.id}> 
          <CategoryItem 
            category={category} 
            categoryRemove={this.props.categoryRemove}
            categoryUpdate={this.props.categoryUpdate}
          />
          <ExpenseForm 
            onComplete={this.props.expenseUpdate} 
            categoryID={category.id}
          />
        </div>
      )}
    </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    categories: state || [],
    expenses: state || {},
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    categoryCreate: (data) => dispatch(category.create(data)),
    categoryUpdate: (data) => dispatch(category.update(data)),
    categoryRemove: (data) => dispatch(category.destroy(data)),
    expenseCreate: (data) => dispatch(expense.create(data)),
    expenseUpdate: (data) => dispatch(expense.update(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
