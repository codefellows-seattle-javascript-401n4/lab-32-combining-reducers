import React from 'react';
import {connect} from 'react-redux';
import {renderIf} from '../../lib/renderIf.js';

class CatNav extends React.Component {

  constructor(props){
    super(props);

    console.log('cats', this.props.categories);
  }

  render(){
    return(
      <div>
        {

        }
      </div>
    )
  }

}

const mapStateToProps = state => ({
  categories: state.categories
});

export default connect(mapStateToProps)(CatNav);
