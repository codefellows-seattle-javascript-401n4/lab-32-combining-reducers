import React from 'react';
import {connect} from 'react-redux';

class CatNav extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        {
          this.props.categories.map(category =>
            <p>category.name</p>
          )
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  categories: state.categories
});

export default connect(mapStateToProps)(CatNav);
