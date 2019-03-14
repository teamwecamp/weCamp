import React, { Component } from 'react';
import { connect } from 'react-redux';
import './viewCamps.css';
import ViewCampsContact from './ViewCampsContact';

class ViewCamps extends Component {
    componentDidMount = () => {
        this.setViewCamps();
    }

    setViewCamps = () => {
        const camp = this.props.match.params.id
        this.props.dispatch({ type: 'FETCH_CAMP_DETAILS', payload: camp });
    }

    render() {
        let camp = this.props.viewCamp;
        return (
            <div>
                {JSON.stringify(this.props.viewCamp)}
                <h1>{camp.Name}</h1>
                <img className="camp_pic" alt="camp pic" src={this.props.viewCamp.photo_url} />
                <ViewCampsContact camp={camp}/>
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    viewCamp: reduxStore.setViewCampsDetails.setViewCampsDetails
});
export default connect(mapStateToProps)(ViewCamps);