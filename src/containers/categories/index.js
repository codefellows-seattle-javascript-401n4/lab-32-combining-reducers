import React from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { CategoryType } from '../../store/types';
import CategoryForm from '../../components/category-create-form';
import CategoryList from '../../components/category-list';

import { categoryCreate, categoryUpdate, categoryDelete } from '../../store/categories/actions';
import { expenseCreate, expenseUpdate, expenseDelete } from '../../store/expenses/actions';

class Categories extends React.Component {
  render() {
    const {
      addCategory,
      deleteCategory,
      updateCategory,
      categories,
    } = this.props;
    return (
      <div className="main">
        <CategoryForm addCategory={addCategory} />
        <CategoryList
          deleteCategory={deleteCategory}
          updateCategory={updateCategory}
          categories={categories}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  expenses: state.expenses,
});

const mapDispatchToProps = dispatch => ({
  addCategory: category => dispatch(categoryCreate(category)),
  updateCategory: category => dispatch(categoryUpdate(category)),
  deleteCategory: category => dispatch(categoryDelete(category)),
  expenseCreate: category => dispatch(expenseCreate(category)),
  expenseUpdate: category => dispatch(expenseUpdate(category)),
  expenseDelete: category => dispatch(expenseDelete(category)),
});

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape(CategoryType)).isRequired,
  addCategory: PropTypes.func.isRequired,
  updateCategory: PropTypes.func.isRequired,
  deleteCategory: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
