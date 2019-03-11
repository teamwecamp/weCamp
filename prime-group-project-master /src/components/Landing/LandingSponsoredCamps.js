import React, { Component } from 'react';
import { connect } from 'react-redux';


class LandingSponsoredCamps extends Component {

    componentDidMount = () => {
        this.setSponsoredCamps();
    }

 
    setSponsoredCamps = () => {
        const action = { type: 'SET_SPONSORED_CAMPS' };
        this.props.dispatch(action);
        console.log('action', action);

    }
    render() {
        return (
            <div>Landing Sponsored Camps</div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapStateToProps)(LandingSponsoredCamps);