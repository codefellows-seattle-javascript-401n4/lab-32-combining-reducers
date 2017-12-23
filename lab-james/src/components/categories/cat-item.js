import React from 'react';
import {connect} from 'react-redux';
import {renderIf} from '../../lib/renderIf.js';
import CatUpdateForm from './cat-update-form.js';
import {deleteCat} from '../../app/actions.js';

import '../../style/components/cat.scss';

class CatItem extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      renderUpdate: false
    }

    this.toggleUpdate = this.toggleUpdate.bind(this);
    this.delete = this.delete.bind(this);
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

  render(){
    return(
      <div>
        {renderIf(
          this.props.category.render,
          <div className="cat-item">
            <h3>{this.props.category.name}</h3>
            <h3>Budget: {this.props.category.budget}</h3>
            <h3>Total Expenses: {this.props.category.expenses}</h3>
            <h3>Remaining: {this.props.category.remaining}</h3>
            <button onClick={this.toggleUpdate}>Update</button>
            <button onClick={this.delete}>Delete</button>
          </div>
      )}
      {renderIf(
        this.state.renderUpdate,
        <CatUpdateForm category={this.props.category} toggleUpdate={this.toggleUpdate}/>
      )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  categories: state
});

const mapDispatchToProps = (dispatch, getState) => ({
  handleDeleteCat: categoryId => dispatch(deleteCat(categoryId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CatItem);
