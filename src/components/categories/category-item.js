import React from 'react';

import CategoryForm from './category-form';

import ExpenceContainer from '../expences/expence-container';

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
                <CategoryForm handle={this.props.handleUpd} category={this.props.category} label = 'Edit Budget' submit="save edit"/>    
                <ExpenceContainer categoryID = {this.props.category.id}/>
            </div>
        )
    }
}

export default CategoryItem;