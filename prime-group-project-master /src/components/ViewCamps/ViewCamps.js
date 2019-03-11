import React, { Component } from 'react';
import { connect } from 'react-redux';


class ViewCamps extends Component {
    componentDidMount = ()=>{
        this.setViewCampsDetails();
    }

    setViewCampsDetails = ()=>{
        const action = {type:'SET_VIEW_CAMPS_DETALS'}
        this.props.dispatch(action);
    }
    render() {
        return (
            <div>View Camps
            {JSON.stringify(this.props.reduxStore.setViewCampsDetails)}
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapStateToProps)(ViewCamps);