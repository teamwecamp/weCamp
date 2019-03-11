import React, { Component } from 'react';
import { connect } from 'react-redux';


class LandingRecentCamps extends Component {

    componentDidMount = () => {
        this.setRecentCamps();
    }

    setRecentCamps = () => {
        const action = { type: 'SET_RECENT_CAMPS' };
        this.props.dispatch(action);
        console.log('action', action);
    }

 
    render() {
        return (
            <div>Landing Recent Camps</div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapStateToProps)(LandingRecentCamps);