import React, { Component } from 'react';
import { connect } from 'react-redux';


class LandingRecentCamps extends Component {

    componentDidMount = () => {
        this.setRecentCamps();
    }

    setRecentCamps = () => {
        const action = { type: 'FETCH_RECENT_CAMPS' };
        this.props.dispatch(action);
        console.log('action', action);
    }

 
    render() {
        return (
            
            <div>Landing Recent Camps
                {JSON.stringify(this.props.recentCamps)}
            </div>
            

        )
    }
}

const mapStateToProps = (reduxStore) => ({
    recentCamps: reduxStore.Landing.setRecentCamps
});
export default connect(mapStateToProps)(LandingRecentCamps);