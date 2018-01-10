import React from 'react';
import {connect} from 'react-redux';
import {renderIf} from '../../lib/renderIf.js';
import CatUpdateForm from './cat-update-form.js';
import {deleteCat} from './cat-actions.js';
import ExpForm from '../expenses/exp-form.js';
import ExpList from '../expenses/exp-list.js';

import '../../style/components/cat.scss';

class CatItem extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      renderUpdate: false,
      renderExpense: false
    }

    this.toggleUpdate = this.toggleUpdate.bind(this);
    this.delete = this.delete.bind(this);
    this.toggleExp = this.toggleExp.bind(this);
  }

  toggleUpdate(){
    if(this.state.renderUpdate){
      this.setState({renderUpdate: false});
    }

    if(!this.state.renderUpdate){
      this.setState({renderUpdate: true});
    }
  }

  delete(){
    this.props.handleDeleteCat(this.props.category.id);
  }

  toggleExp(){
    if(this.state.renderExpense){
      this.setState({renderExpense: false});
    }

    if(!this.state.renderExpense){
      this.setState({renderExpense: true});
    }
  }

  render(){
    return(
      <div>
        {renderIf(
          this.props.category.render,
          <div className="cat-item">
            <div className="cat-details">
              <h3>{this.props.category.name}</h3>
              <h3>Budget: {this.props.category.budget}</h3>
              <h3>Total Expenses: {this.props.category.expenses}</h3>
              <h3>Remaining: {this.props.category.remaining}</h3>
              <button onClick={this.toggleUpdate}>Update</button>
              <button onClick={this.delete}>Delete</button>
              <button onClick={this.toggleExp}>+ Add Expense</button>
            </div>
            <ExpList catId={this.props.category.id} />
          </div>
      )}
      {renderIf(
        this.state.renderUpdate,
        <CatUpdateForm category={this.props.category} toggleUpdate={this.toggleUpdate}/>
      )}
      {renderIf(
        this.state.renderExpense,
        <ExpForm toggleExpForm={this.toggleExp} catId={this.props.category.id}/>
      )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  categories: state.categories
});

const mapDispatchToProps = (dispatch, getState) => ({
  handleDeleteCat: categoryId => dispatch(deleteCat(categoryId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CatItem);
