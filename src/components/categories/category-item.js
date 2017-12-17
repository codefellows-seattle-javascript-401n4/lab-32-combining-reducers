import React from 'react';

import CategoryForm from './category-form';

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
                    <a href="#" onClick={()=>this.props.handleDel(this.props.category)}>x</a>
                </header>
                <CategoryForm handler={this.props.handleUpd} category={this.props.category} submit="save edit"/>    
                <form>
                    <input type = "text" placeholder="Type expense"></input>
                    <input type = "number" placeholder="Type expense amount"></input>
                </form>


            </div>
        )
    }
}

export default CategoryItem;