import React from 'react';
import {connect} from 'react-redux';

import {expenceCreate, expenceUpdate, expenceDelete} from './expence-actions';

import ExpenceList from './expence-list';

class Expences extends React.Component {
    render() {
       console.log('catID in expence-cont::::', this.props.categoryId)
        return (
            <ExpenceList
                categoryId={this.props.categoryId}
                expences={this.props.expences}
                handleAdd={this.props.expenceCreate}
                handleDelete={this.props.expenceDelete}
                handleUpdate={this.props.expenceUpdate}
            />
        )
    }

}

const mapStateToProps = (state) => ({
    expences:state.expences
})

const mapDispatchToProps = (dispatch,getState) => ({
    expenceCreate: expence => dispatch(expenceCreate(expence)),
    expenceDelete: expence => dispatch(expenceDelete(expence)),
    expenceUpdate: expence => dispatch(expenceUpdate(expence)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Expences);