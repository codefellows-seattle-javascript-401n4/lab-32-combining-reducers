import React from 'react';
import {connect} from 'react-redux';
import {deleteExp} from './exp-actions';

class ExpItem extends React.Component {

  constructor(props){
    super(props);

    this.deleteExp = this.deleteExp.bind(this);
  }

  deleteExp(){
    this.props.handleDeleteExp(Object.assign({}, this.props.expense));
  }

  render(){
    return(
      <div>
        <a className="close-button" onClick={this.deleteExp}>x</a>
        <h5>{this.props.expense.name}</h5>
        <h5>Amount: {this.props.expense.amount}</h5>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  expenses: state.expenses,
});

const mapDispatchToProps = (dispatch, getState) => ({
  handleDeleteExp: exp => dispatch(deleteExp(exp)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpItem);
