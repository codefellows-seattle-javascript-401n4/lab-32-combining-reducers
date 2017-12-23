import React from 'react';
import {connect} from 'react-redux';

class ExpItem extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <h5>{this.props.expense.name}</h5>
        <h5>Amount: {this.props.expense.amount}</h5>
      </div>
    )
  }
}

// const mapStateToProps = state => ({
//   expenses: state.expenses,
// });

export default ExpItem;
