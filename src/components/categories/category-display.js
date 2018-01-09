import React from 'react';

class CategoryDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

runToggle = () => {
  this.props.toggle(this.props.category.id);
}

deleteCategory = () => {
  this.props.deleteCategory(this.props.category.id);
}
  render() {
    return (
      <div>
        {this.props.category.name}
        <button onClick={this.runToggle}>Update</button>
        <button onClick={this.deleteCategory}>Delete</button>
      </div>
    )
  }
}

module.exports = CategoryDisplay;
