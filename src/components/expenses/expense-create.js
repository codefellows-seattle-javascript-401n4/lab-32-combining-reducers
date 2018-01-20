import React from 'react';

class ExpenseCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state={};
  }
  createExpense = (e) => {
    e.preventDefault();
     this.props.actionCreate({
       name: this.state.name,
       categoryID: this.props.categoryID
  }
)};
    expenseChange = (e) => {
      this.setState({
        name: e.target.value,
      })
    }
  render() {
    return (
      <div>
      <h3>'What expense do you want me to create?'</h3>
        <form>
          <input type="text" onChange={this.expenseChange} />
          <button onClick={this.createExpense}>Create</button>

        </form>
      </div>
    )
  }
}

module.exports = ExpenseCreate;
