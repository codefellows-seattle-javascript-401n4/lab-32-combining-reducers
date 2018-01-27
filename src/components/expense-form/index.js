import React from 'react';
import PropTypes from 'prop-types';
import { noop } from 'lodash';

import BaseForm from '../form';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.buttons = [{
      key: 'submit-expense',
      type: 'submit',
      value: 'Submit Expense',
      handler: noop,
    }];
    this.onSubmit = this.onSubmit.bind(this);
    this.setFormState = this.setFormState.bind(this);
  }

  onSubmit() {
    this.props.addExpense(Object.assign({}, this.state));
  }

  setFormState(newState) {
    this.setState(newState);
  }

  render() {
    return (
      <div className="sidebar">
        <BaseForm
          current={this.state}
          onSubmit={this.onSubmit}
          setFormState={this.setFormState}
          buttons={this.buttons}
        />
      </div>
    );
  }
}

ExpenseForm.propTypes = {
  addExpense: PropTypes.func.isRequired,
};

export default ExpenseForm;
