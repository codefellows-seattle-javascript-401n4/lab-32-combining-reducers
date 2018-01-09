import React from 'react';
import Categories from './category-container';

import uuid from 'uuid/v1';

class CategoryCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state={};
  }

createCategory = (e) => {
  e.preventDefault();
  this.props.createCategory({name: this.state.name})

}

captureChange = (e) => {
  this.setState({
    name: e.target.value
  });
}
  render() {
    return (
      <div>
      <h2>'What Category do you want to create?'</h2>
      <form>
        <input type="text" onChange={this.captureChange} />
        <button onClick={this.createCategory}>Create</button>
      </form>
      </div>
    )
  }
}

module.exports = CategoryCreate;
