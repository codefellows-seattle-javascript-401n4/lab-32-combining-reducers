import React from 'react';

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
    let {key,value} = e.target;
    this.setState({[key]:value});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.onComplete(this.state);
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

      </form>
    )
  }
}

export default ExpenseForm;