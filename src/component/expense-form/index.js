import React from 'react';

let emptyState = {
  name: '',
  cost: 0,
}

class ExpenseForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      name: '',
      cost: 0,
      categoryID: this.props.categoryID,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    let {name,value} = e.target;
    this.setState({[name]:value});
  }

  handleSubmit(e){
    e.preventDefault();
    console.log(this.props);
    this.props.onComplete(this.state);
    console.log('expense state', this.state)
    // this.setState(emptyState);
  }



  render(){
    return(
      <form 
        className='expense-form'
        onSubmit={this.handleSubmit}
      >

        <input
          name='name'
          placeholder='expense item'
          type='text'
          value={this.state.name}
          onChange={this.handleChange}
        />

        <input
          name='cost'
          type='number'
          value={this.state.cost}
          onChange={this.handleChange}
        />

        <button type='submit'> create expense </button>

      </form>
    )
  }
}

export default ExpenseForm;