import React from 'react';
import {connect} from 'react-redux';
import {renderIf} from '../../lib/renderIf.js';

import ExpItem from './exp-item.js';

import '../../style/components/exp.scss';

class ExpList extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="expense-list">
        {
          this.props.expenses.map(expense => (
            renderIf(
              this.props.catId === expense.catId,
              <ExpItem key={expense.id} expense={expense} />
            )
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  expenses: state.expenses,
});

export default connect(mapStateToProps)(ExpList);
