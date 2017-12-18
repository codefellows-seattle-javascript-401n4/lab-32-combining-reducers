import React from 'react';
import { noop } from 'lodash';
import PropTypes from 'prop-types';

import { CategoryType } from '../../app/types';
import CategoryForm from '../form';

class CategoryEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.inputs = [
      {
        key: 'cancel',
        type: 'button',
        value: 'Cancel',
        handler: this.cancel.bind(this),
      },
      {
        key: 'submit-category',
        type: 'submit',
        value: 'Submit',
        handler: noop,
      }];
    this.cancel = this.cancel.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.setFormState = this.setFormState.bind(this);
  }


  onSubmit() {
    const {
      category,
      updateCategory,
    } = this.props;
    const updatedCategory = Object.assign(this.state, { id: category.id, editing: false });
    updateCategory(updatedCategory);
  }

  setFormState(newState) {
    this.setState(newState);
  }

  cancel() {
    const {
      category,
      updateCategory,
    } = this.props;
    const updatedCategory = Object.assign(this.state, { id: category.id, editing: false });
    updateCategory(updatedCategory);
  }
  render() {
    const {
      category,
    } = this.props;
    return (
      <CategoryForm
        onSubmit={this.onSubmit}
        setFormState={this.setFormState}
        inputs={this.inputs}
        category={category}
        current={category}
      />
    );
  }
}

CategoryEditForm.propTypes = {
  category: PropTypes.shape(CategoryType).isRequired,
  updateCategory: PropTypes.func.isRequired,
};

export default CategoryEditForm;
