import React from 'react';

class CategoryForm extends React.Component {

  constructor(props) {

    super(props);

    this.state = this.props.category || {name:'', budget:''};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }
    

    handleSubmit(e) {
      e.preventDefault();
      console.log(this.props.handler, this.state);
      this.props.handler( Object.assign({}, this.state));
      this.setState({name: '', budget: ''})
    }

    handleChange(e) {
      this.setState({[e.target.name]:e.target.value});
    }

    render() {
      return (

        <form id="formDefault" onSubmit={this.handleSubmit} >
          <div id="categoryForm">
          <input
            className="catInputs"
            type="text"
            name="name"
            value={this.state.name}
            placeholder="category name"
            onChange={this.handleChange}
            />
          <input
            className="catInputs"
            type="number"
            name="budget"
            value={this.state.budget}
            placeholder="budget"
            onChange={this.handleChange}
          />
          </div>
          <input id='categorySubmitButton' type='submit' value={this.props.submitText}/>
        </form>
      )
    }

}

export default CategoryForm;