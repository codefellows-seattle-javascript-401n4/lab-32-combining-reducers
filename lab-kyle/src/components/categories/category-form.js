import React from 'react';

let emptyState = {
  name: '',
};

class CategoryForm extends React.Component {
  constructor(props){
    super(props);
    this.state = this.state = this.props.category || emptyState;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    let {name, value} = e.target;
    this.setState({name: value});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.onComplete(this.state);
    this.setState(emptyState);
  }

  componentWillReceiveProps(newProps){
    if(newProps.category){
      this.setState(newProps.category);
    }
  }

  render(){
    let button = this.props.category ? 'update category' : 'create category';
    return (
      <form className="category-form" onSubmit={this.handleSubmit}>
        <label>Name:
          <input
            type="text"
            name="name"
            placeholder="Enter a Name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">{button}</button>
      </form>
    )
  }
}
export default CategoryForm
