import React from 'react';
import ReactDom from 'react-dom';

import newExpense from '../../lib/newExpense';

class ExpenseCreate extends React.Component {
    constructor(props) {
        super(props);

        this.state = {categoryID: props.categoryID};
    }

    captureInput = (event) => {
        this.setState({[event.target.id]: event.target.value});
    }

    createExpense = (event) => {
        event.preventDefault();
        this.props.createExpense();
    }

    render() {
        return (
            <form>
                Create Your Expense: 

                <input onChange={this.captureInput} id="expense" placeholder="Expense Name" ></input>
                <input onChange={this.captureInput} id="cost" placeholder="Cost" ></input>
                <button onClick={this.createExpense}>Create Expense</button>
            </form>
        )
    }
}

export default ExpenseCreate;