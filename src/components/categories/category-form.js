import React from 'react';

class CategoryForm extends React.Component{

    constructor(props) {
        super(props);
        this.state = this.props.category || {title:'', budget:0};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);   
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.props.handler, this.state);
        this.props.handler(this.state);//  Object.assign({}, 
    }

    handleChange(e) {
        this.setState({[e.target.name]:e.target.value});
        console.log(this.state)
    }

    render(){
        console.log('in category form::::', this.props)
        return(
            <form className="categoryForm" onSubmit={this.handleSubmit}>
               <input type ="text"
                    name="title"
                    value={this.state.title}
                    placeholder="New Category Name"
                    onChange={this.handleChange}
               />
                <input type="number"
                    name="budget"
                    value = {this.state.budget}
                    placeholder="Enter Category Budget"
                    onChange={this.handleChange}
                />
                <input type="submit" value ={this.props.submit} />
            </form>
        )
    }
}

export default CategoryForm;