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
            <div>
            {JSON.stringify(this.props.viewCamp)}
            <h1>{this.props.viewCamp.Name}</h1>
            <img src={this.props.viewCamp.photo_url} />
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    viewCamp: reduxStore.setViewCampsDetails.setViewCampsDetails
});
export default connect(mapStateToProps)(ViewCamps);