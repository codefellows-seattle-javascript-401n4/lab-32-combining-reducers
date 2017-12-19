import React from 'react';

class ExpenceForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        let defaultState = {
            title:'',
            amount:0,
            categoryId:this.props.categoryId
        }
        this.state = this.props.expence || defaultState;
    }

    handleChange(e) {
        this.setState( {[e.target.name]:e.target.value} );
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.handler(Object.assign({}, this.state));
        setState({title:'', amount:0});
    }

    render() {
        return (
                <form className="expenceForm" onSubmit={this.handleSubmit}>
                    <label>
                        <span>{this.props.label}</span>
                        <input
                            type="text"
                            name="title"
                            value={this.state.title}
                            onChange={this.handleChange}
                        />
                    </label>

                    <label>
                        <span>Amount</span>
                        <input
                            type="number"
                            name="amount"
                            value={this.state.amount}
                            onChange={this.handleChange}
                        />
                    </label>

                    <input type = "Submit" value = {this.props.value}>
                    </input>

                </form>
        )
    }
}

export default ExpenceForm;