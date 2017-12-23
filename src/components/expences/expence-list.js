import React from 'react';

import ExpenceForm from './expence-form';
import ExpenceItem from './expense-item';

const renderIf = (test, component) => {
    return test ? component : undefined
}

class ExpenceList extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        
        console.log(this.props)
        return (
            <div className="expences">
                <ExpenceForm handleAdd={this.props.expenceCreate} categoryId={this.props.categoryId} expences = {this.props.expences} submit="save expence"/>    
                <div>
                    {
                        this.props.expences[this.props.categoryID].map((expence, i) => 
                        renderIf(expences.length, <ExpenceItem handleDel={this.props.handleDel} 
                            handleUpd={this.props.handleUpd} key={expence.id} expences={this.props.expences} />))
                    }
                </div>
            </div>
        )
    }
}

export default ExpenceList;