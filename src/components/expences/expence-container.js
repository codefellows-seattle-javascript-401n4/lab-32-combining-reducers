import React from 'react';
import {connect} from 'react-redux';

import {expenceCreate, expenceUpdate, expenceDelete} from './expence-actions';

import expenceList from './expence-list';

class Expences extends React.Component {

    render() {
        return (
            <expenceList
                categoryId={this.props.categoryId}
                expences={this.props.expence}
                handleAdd={this.props.expenceCreate}
                handleDelete={this.props.expenceDelete}
                handleUpdate={this.props.expenceUpdate}
            />
        )
    }

}

const mapStateToProps = (state) => ({
    expence:state.expence
})

const mapDispatchToProps = (dispatch,getState) => ({
    expenceCreate: expence => dispatch(expenceCreate(expence)),
    expenceDelete: expence => dispatch(expenceDelete(expence)),
    expenceUpdate: expence => dispatch(expenceUpdate(expence)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Expences);