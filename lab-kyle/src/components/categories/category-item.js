import React from 'react';

import CategoryForm from './category-form';

class CategoryItem extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="category">
        <header>
          <CategoryForm onComplete={this.props.categoryUpdate} category={this.props.category} />
          <a href="#" onClick={()=>this.props.categoryDelete(this.props.category.id)}>X</a>
        </header>
      </div>
    )
  }
}
export default CategoryItem
