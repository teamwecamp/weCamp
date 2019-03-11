import React, { Component } from 'react';
import { connect } from 'react-redux';


class UserProfile extends Component {
    componentDidMount = () => {
        this.setUserProfileInfo();
    }

    setUserProfileInfo() {
        const action = { type: 'SET_USER_PROFILE_INFO' }
        this.props.dispatch(action);
    }

    render() {
        return (
            <div>User Profile
                {JSON.stringify(this.props.reduxStore.setUserProfileInfo)}
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapStateToProps)(UserProfile);