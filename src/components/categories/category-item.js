import React from 'react';

import CategoryForm from './category-form';

import ExpenceForm from '../expences/expence-form';

class CategoryItem extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log("in item props::::",   this.props);
        return(
            <div className="category">
                <header>
                    <h3>{this.props.category.title}</h3>
                    <h4>{this.props.category.budget}</h4>
                    <a id ="delCat"href="#" onClick={()=>this.props.handleDel(this.props.category)}>x</a>
                </header>
                <CategoryForm handler={this.props.handleUpd} category={this.props.category} label = 'Edit Budget' submit="save edit"/>    
                <form>
                    <span><h4>Enter Expence:</h4></span>
                    <ExpenceForm label ='Enter Category' />
                    
                </form>


            </div>
        )
    }
}

export default CategoryItem;