import React from 'react';
import {connect} from 'react-redux';

import {updateCat} from './cat-actions.js';

import '../../style/components/modal.scss';

class CatUpdateForm extends React.Component {

  constructor(props){
    super(props);

    this.state = this.props.category;

    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleChange(e){
    this.setState({[e.target.id]: e.target.value});
    console.log(this.state);
  }

  handleUpdate(e){
    e.preventDefault();
    this.props.handleUpdateCat(Object.assign({}, this.state));
    this.props.toggleUpdate();
  }

  render(){
    return (
      <div className="overlay">
        <div className="modal">
          <form onSubmit={this.handleUpdate}>
            <a className="close-button" onClick={this.props.toggleUpdateForm}>x</a>
            <label className="form-field" htmlFor="name">Name:
              <input type="text" id="name" onChange={this.handleChange} defaultValue={this.state.name} />
            </label>
            <label className="form-field" htmlFor="budget">Budget:
              <input type="number" id="budget" onChange={this.handleChange} defaultValue={this.state.budget}/>
            </label>
            <input type="submit" value="Update" />
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  categories: state.categories
});

const mapDispatchToProps = (dispatch, getState) => ({
  handleUpdateCat: category => dispatch(updateCat(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(CatUpdateForm);
