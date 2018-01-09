import React from 'react';
import Categories from './category-container';

class CategoryUpdate extends React.Component {
  constructor(props) {
    super(props);
  }
  runToggle = () => {
    this.props.toggle(this.props.category.id);
  }
  changeCategory = (e) => {
    e.preventDefault();
    this.props.update({id: this.props.category.id, name: this.state.name})
    this.runToggle();
  }
  captureChange = (e) => {
    this.setState({
      name: e.target.value
    });
  }
  render() {
    return (
      <div>
      <form>
        <input type="text" onChange={this.captureChange} />
        <button onClick={this.changeCategory}>Change</button>
        <button onClick={this.runToggle}>Cancel Update</button>
      </form>
      </div>
    )
  }
}

module.exports = CategoryUpdate;
