import React from 'react';
import {connect} from 'react-redux';

import CategoryItem from './category-item';

class CategoryList extends React.Component{
    render(){
        console.log("in list props::::", this.props)
        return(
            <div>
                {
                    this.props.cats.map((category, i)=> 
                    <CategoryItem handleDel={this.props.handleDel} handleUpd={this.props.handleUpd} key={category.id} category={category} />)
                }
            </div>
        )
    }
}

export default CategoryList;