import React from 'react';

import {connect} from 'react-redux';

import CategoryForm from './category-form';
import CategoryList from './category-list';

import {categoryCreate, categoryUpdate, categoryDelete} from '../../app/actions';

class Categories extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div id="board">
        <CategoryForm onComplete={this.props.categoryCreate} />
        {this.props.categories.map((category,i) =>
          <div key={category.id}>
            <h3>{category.name}</h3>
            <button onClick={() => this.props.categoryDelete(category.id)}>X</button>
            <CategoryForm category={category} onComplete={this.props.categoryUpdate} />
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  categories: state || [],
});

const mapDispatchToProps = (dispatch, getState) => ({
  categoryCreate: category => dispatch(categoryCreate(category)),
  categoryUpdate: category => dispatch(categoryUpdate(category)),
  categoryDelete: category => dispatch(categoryDelete(category))
})

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
