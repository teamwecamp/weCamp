import React, { Component } from 'react';
import { connect } from 'react-redux';


class ViewCamps extends Component {
    componentDidMount = ()=>{
        this.setViewCamps();
    }

    setViewCamps = ()=>{
        const camp = this.props.match.params.id
        this.props.dispatch({ type: 'FETCH_CAMP_DETAILS', payload: camp});
    }
    render() {
        return (
            <div>View Camps
            {JSON.stringify(this.props.viewCamp)}
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    viewCamp: reduxStore.setViewCampsDetails
});
export default connect(mapStateToProps)(ViewCamps);