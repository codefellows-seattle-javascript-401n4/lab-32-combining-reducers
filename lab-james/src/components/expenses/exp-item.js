import React from 'react';
import {connect} from 'react-redux';
import {deleteExp} from './exp-actions';
import {renderIf} from '../../lib/renderIf.js';


import '../../style/components/exp.scss';

class ExpItem extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      renderUpdate: false,
    }

    this.deleteExp = this.deleteExp.bind(this);
    this.toggleUpdate = this.toggleUpdate.bind(this);
  }

  deleteExp(){
    this.props.handleDeleteExp(Object.assign({}, this.props.expense));
  }

  toggleUpdate(){
    if(this.state.renderUpdate){
      this.setState({renderUpdate: false});
    }

    if(!this.state.renderUpdate){
      this.setState({renderUpdate: true});
    }

    console.log(this.state);
  }

  render(){
    return(
      <div className="exp-item" onDoubleClick={this.toggleUpdate}>
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
