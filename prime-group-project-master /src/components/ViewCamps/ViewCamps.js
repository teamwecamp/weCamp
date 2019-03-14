import React, { Component } from 'react';
import { connect } from 'react-redux';
import './viewCamps.css';
import ViewCampsContact from './ViewCampsContact';
import Button from '@material-ui/core/Button';

class ViewCamps extends Component {
    componentDidMount = () => {
        this.setViewCamps();
    }

    setViewCamps = () => {
        const camp = this.props.match.params.id
        this.props.dispatch({ type: 'FETCH_CAMP_DETAILS', payload: camp });
    }

    goToProgram = () => {
        this.props.history.push(`/viewProgram/${this.props.match.params.id}`)
    }

    render() {
        let camp = this.props.viewCamp;
        return (
            <div className="viewCamps">
                <h1>{camp.Name}</h1>
                {/* add logo */}
                <img className="camp_pic" alt="camp pic" src={this.props.viewCamp.photo_url} />
                <ViewCampsContact camp={camp} />
                <Button variant="contained" color="primary" size="large" onClick={this.goToProgram}>
                    View Program Details
                </Button>
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    viewCamp: reduxStore.setViewCampsDetails.setViewCampsDetails
});
export default connect(mapStateToProps)(ViewCamps);