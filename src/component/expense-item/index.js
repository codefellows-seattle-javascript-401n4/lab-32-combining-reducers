import React from 'react';

class ExpenseItem extends React.Component{
  constructor(props){
    super(props);
  }

    render(){
      return(
        <h1> {this.props.section.name} </h1>
      )
    }
};