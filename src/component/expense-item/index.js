import './expense-item.scss';
import React from 'react';

class ExpenseItem extends React.Component{
  constructor(props){
    super(props);
  }

    render(){
      return(
        <div className='expense-item'>
          {this.props.expenses[this.props.categoryID].map((expense,i) => 
            <div key={expense.id}>
              <h3> {(expense.name)} </h3>
            </div>
          )}
        </div>
      )
    }
};

export default ExpenseItem;