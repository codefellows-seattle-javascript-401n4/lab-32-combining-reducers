import React from 'react';
import PropTypes from 'prop-types';
import { noop } from 'lodash';

import BaseForm from '../form';

class CategoryCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.inputs = [{
      key: 'submit-categories',
      type: 'submit',
      value: 'Submit',
      handler: noop,
    }];
    this.onSubmit = this.onSubmit.bind(this);
    this.setFormState = this.setFormState.bind(this);
  }

  onSubmit() {
    this.props.addCategory(Object.assign({}, this.state));
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
          inputs={this.inputs}
        />
      </div>
    );
  }
}

CategoryCreateForm.propTypes = {
  addCategory: PropTypes.func.isRequired,
};

export default CategoryCreateForm;
