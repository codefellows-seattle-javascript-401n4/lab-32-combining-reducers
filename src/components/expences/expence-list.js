import React from 'react';

import ExpenceForm from './expence-form';
import Expence from './expence';
class CardList extends React.Component {

    render() {
        return (
            <div className="cards">
                 <ExpenceForm categoryId={this.props.categoryId} expence = {this.props.expence} submit="add expence"/>    
            </div>
        )
    }
}

export default ExpenceList;