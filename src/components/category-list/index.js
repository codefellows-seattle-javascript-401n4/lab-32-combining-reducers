import React from 'react';
import PropTypes from 'prop-types';

import CategoryItem from '../category-item';
import { CategoryType } from '../../store/types';

class CategoryList extends React.Component {
  render() {
    const {
      categories,
      updateCategory,
      deleteCategory,
    } = this.props;
    const listItems = categories.map(category =>
      (
        <CategoryItem
          key={category.id}
          category={category}
          updateCategory={updateCategory}
          deleteCategory={deleteCategory}
        />
      ));
    return (
      <ul className="results">{listItems}</ul>
    );
  }
}

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape(CategoryType)).isRequired,
  updateCategory: PropTypes.func.isRequired,
  deleteCategory: PropTypes.func.isRequired,
};

export default CategoryList;
