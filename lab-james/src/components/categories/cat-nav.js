import React from 'react';
import {connect} from 'react-redux';
import {renderIf} from '../../lib/renderIf.js';
import {packSet} from '../../lib/pack-set.js';

import {catNavUpdate} from './cat-actions.js';

import '../../style/components/cat.scss';

class CatNav extends React.Component {

  constructor(props){
    super(props);

    this.handleCatSelect = this.handleCatSelect.bind(this);
    this.handleShowAll = this.handleShowAll.bind(this);
  }

  handleCatSelect(id){
    this.props.categories.map(cat => {
      let pack = {};
      pack.id = id;
      pack.cat = cat;
      pack.cat = packSet(id, pack.cat);
      this.props.handleCatNavUpdate(Object.assign({}, pack));
  })
  }

  handleShowAll(){
    let pack = {};
    this.props.categories.map(cat => {
      pack.cat = cat;
      pack.cat.render = true;
      this.props.handleCatNavUpdate(Object.assign({}, pack));
    })
  }

  render(){
    return(
      <div className="cat-nav">
        <p className="cat-nav-item" onClick={this.handleShowAll}>Show All</p>
        {
          this.props.categories.map(category => (
            <p key={category.id} onClick={() => this.handleCatSelect(category.id)} className="cat-nav-item">{category.name}</p>
          ))
        }
      </div>
    )
  }

}

const mapStateToProps = state => ({
  categories: state.categories
});

const mapDispatchToProps = (dispatch, getState) => ({
  handleCatNavUpdate: target => dispatch(catNavUpdate(target))
});

export default connect(mapStateToProps, mapDispatchToProps)(CatNav);
