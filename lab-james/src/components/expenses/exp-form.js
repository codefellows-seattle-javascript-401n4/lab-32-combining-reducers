import React from 'react';
import {connect} from 'react-redux';

import {createExp} from './exp-actions';
import {tallyExp} from './exp-actions';

import '../../style/components/modal.scss';

class ExpForm extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      catId: this.props.catId
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({[e.target.id]: (e.target.value)});
  }

  handleSubmit(e){
    e.preventDefault();
    this.state.amount = parseInt(this.state.amount);
    this.props.handleCreateExp(Object.assign({}, this.state));
    this.props.toggleExpForm();
  }

  render(){
    return(
      <div className="overlay">
        <div className="modal">
        <form onSubmit={this.handleSubmit}>
          <a className="close-button" onClick={this.props.toggleExpForm}>x</a>
          <label className="form-field" htmlFor="name">Name:
            <input type="text" id="name" onChange={this.handleChange} />
          </label>
          <label className="form-field" htmlFor="amount">Amount:
            <input type="number" id="amount" onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  expenses: state.expenses,
});

const mapDispatchToProps = (dispatch, getState) => ({
  handleCreateExp: exp => dispatch(createExp(exp)),
  handleTallyExp: exp => dispatch(tallyExp(exp)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpForm);
