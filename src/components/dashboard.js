'use strict';

import React from 'react';

import {connect} from 'react-redux';

import CatForm from './catForm.js';
import CatItem from './catItem.js';


import {expenseCreate,expenseUpdate,expenseDelete} from '../src/categories/catActions.js';

class Categories extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <CatForm handleAdd={this.props.handleAddCategory} handleUp={this.props.handleUpdateCategory}/>
        <CatItem handleAdd={this.props.handleAddCategory} handleUp={this.props.handleUpdateCategory} cats={this.props.categories}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories : state,
});

const mapDispatchToProps = (dispatch, getState ) => ({
  handleAddCategory: category => dispatch(expenseCreate(category)),
  handleUpdateCategory: category => dispatch(expenseUpdate(category)),
  handleDeleteCategory: category => dispatch(expenseDelete(category)),
});

export default connect(mapStateToProps,mapDispatchToProps)(Categories);
