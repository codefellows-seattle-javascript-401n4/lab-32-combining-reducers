import React from 'react';
import {connect} from 'react-redux';

import {updateExp} from './exp-actions.js';

import '../../style/components/modal.scss';

class ExpUpdateForm extends React.Component {

  constructor(props){
    super(props);

    this.state = this.props.expense;

    this.state.difference = this.props.expense.amount;

    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleChange(e){
    this.setState({[e.target.id]: e.target.value});
  }

  handleUpdate(e){
    e.preventDefault();
    this.state.amount = parseInt(this.state.amount);
    this.state.difference = this.state.amount - this.state.difference;
    console.log(this.state);
    this.props.handleUpdateExp(Object.assign({}, this.state));
    this.props.toggleUpdate();
  }

  render(){
    return (
      <div className="overlay">
        <div className="modal">
          <form onSubmit={this.handleUpdate}>
            <a className="close-button" onClick={this.props.toggleUpdate}>x</a>
            <label className="form-field" htmlFor="name">Name:
              <input type="text" id="name" onChange={this.handleChange} defaultValue={this.state.name} />
            </label>
            <label className="form-field" htmlFor="amount">Amount:
              <input type="number" id="amount" onChange={this.handleChange} defaultValue={this.state.amount}/>
            </label>
            <input type="submit" value="Update" />
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  expenses: state.expenses
});

const mapDispatchToProps = (dispatch, getState) => ({
  handleUpdateExp: expense => dispatch(updateExp(expense))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpUpdateForm);
