import React from 'react';
import CategoryForm from '../category-form';

class CategoryItem extends React.Component{
  render(){
    return(
      <div>
        <h2> {this.props.category.name} </h2>
        <button onClick={() => this.props.categoryRemove(category)}> X </button>
        <CategoryForm category={this.props.category} onComplete={this.props.categoryUpdate} />
      </div>

    )
  }
}

export default CategoryItem;