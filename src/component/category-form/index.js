import React from 'react';

let emptyState = {
  name: '',
  budget: 0,
}

class CategoryForm extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.category || emptyState;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    let {name, value} = e.target;
    this.setState({[name]: value});
  };

  handleSubmit(e){
    e.preventDefault();
    this.props.onComplete(this.state);
    this.setState(emptyState);
  };

  componentWillReceiveProps(newProps){
    if(newProps.category)
      this.setState(newProps.category);
  };
  
  render(){
    let button = this.props.category ? 'update category' : 'create category';

    return(
      <form
        className='category-form'
        onSubmit={this.handleSubmit}>

        <input
          type='text'
          name='name'
          placeholder='category name'
          value={this.state.name}
          onChange={this.handleChange}
        />

        <input
          type='number'
          name='budget'
          placeholder='budgeted amount'
          value={this.state.budget}
          onChange={this.handleChange}
        />

        <button type='submit'> {button} </button>
      
      </form>
    )
  }
}

export default CategoryForm;