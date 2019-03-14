import React, { Component } from 'react';
import { connect } from 'react-redux';
import './viewCamps.css';

class ViewCamps extends Component {
    componentDidMount = ()=>{
        this.setViewCamps();
    }

    setViewCamps = ()=>{
        const camp = this.props.match.params.id
        this.props.dispatch({ type: 'FETCH_CAMP_DETAILS', payload: camp});
    }

    getPhone = () => {
        let camp = this.props.viewCamp;
        let arr = camp.split('');
        console.log(arr);
        
    }
    render() {
        let camp = this.props.viewCamp;
        return (
            <div>
            {JSON.stringify(this.props.viewCamp)}
            <h1>{camp.Name}</h1>
            <img className="camp_pic" src={this.props.viewCamp.photo_url} />
            <p>{this.props.viewCamp.address}</p>
            <p>{camp.phone}</p>
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    viewCamp: reduxStore.setViewCampsDetails.setViewCampsDetails
});
export default connect(mapStateToProps)(ViewCamps);