import React from 'react';
import {connect} from 'react-redux';
import {renderIf} from '../../lib/renderIf.js';

class CatNav extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        {
          this.props.categories.map(category => (
            <p key={category.id}>{category.name}</p>
          ))
        }
      </div>
    )
  }

}

const mapStateToProps = state => ({
  categories: state
});

export default connect(mapStateToProps)(CatNav);
