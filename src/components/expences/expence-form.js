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
        this.props.handleAdd(Object.assign({}, this.state));
        setState({title:'', amount:0})
    }

    render() {
        return (
                <form className="expenceForm" onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            name="title"
                            placeholder="expence"
                            value={this.state.title}
                            onChange={this.handleChange}
                        />
                        <input
                            type="number"
                            name="amount"
                            value={this.state.amount}
                            onChange={this.handleChange}
                        />
                    <input type = "submit" value = {this.props.submit}/>
                </form>
        )
    }
}

export default ExpenceForm;