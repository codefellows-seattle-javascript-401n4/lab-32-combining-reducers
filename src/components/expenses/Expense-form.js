import React from 'react';
import store from '../../lib/store'

class ExpenseForm extends React.Component {

  constructor(props) {

    super(props);

    let initialState = {
      expense:'',
      cost:'',
      categoryId:this.props.categoryId
    }

    this.state = this.props.expense || initialState;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.formState = this.props.formState; 
    this.submitState = this.props.submitState; 
    this.deleteButton = this.props.submitText !== 'Update' ? 'invisible' : '';

  }

  // componentWillReceiveProps(){
  //   let state = store();
  //   this.setState = {state};

  // }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.props.handler, this.state);
    this.props.handler( Object.assign({}, this.state));
    this.setState({expense: '', cost: ''})      
  }

  handleChange(e) {
    this.setState({[e.target.name]:e.target.value});
  }

  render() {
    return (

      <form className="ExpenseForm" onSubmit={this.handleSubmit} >
        <div id='ExpenseDiv'>
          <input
            className='expenseInputs'
            id="expenseName"
            type="text"
            name="expense"
            value={this.state.expense}
            placeholder="expense"
            required
            onChange={this.handleChange}
            />
          <input
            className='expenseInputs'
            id="expenseAmt"
            type="number"
            name="cost"
            value={this.state.cost}
            placeholder="cost"
            required
            onChange={this.handleChange}
            />
          <a id='deleteExpense' className={this.deleteButton} href="#" onClick={()=>this.props.handleDelete(this.props.expense)}>X</a>
        </div>
        <input 
        id='expenseSubmitButton' 
        className={this.submitState} 
        type='submit'
        value={this.props.submitText}/>
      </form>
    )
  }

}

export default ExpenseForm;