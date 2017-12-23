import React from 'react';

import ExpenceForm from '../expences/expence-form';

class ExpenceItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="expences">
                <header>
                    <h4>{this.props.expence.title}</h4>
                    <h4>{this.props.expence.amount}</h4>
                    <a id ="delEx"href="#" onClick={()=>this.props.handleDel(this.props.expence)}>x</a>
                </header>
            </div>
        )
    }
}
export default ExpenceItem;