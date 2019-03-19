import React, { Component } from 'react';
import { connect } from 'react-redux';




class UserProfile extends Component {
    componentDidMount = () => {
        this.setUserProfileInfo();
        this.fetchChildInfo();
    }

    // this get user's profile
    setUserProfileInfo() {
        const action = {
            type: 'FETCH_USER_PROFILE_INFO' }
        this.props.dispatch(action);
    }

    // this gets child's profile
    fetchChildInfo() {
        const action ={
            type: 'FETCH_CHILD_PROFILE_INFO'}
        this.props.dispatch(action)
    }

    render() {
        

        return (
            <div>
                {JSON.stringify(this.props.user)}
                {JSON.stringify(this.props.child)}
           

            
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    user: reduxStore.setUserProfileInfo,
    child: reduxStore.setChildProfileInfo
});


    
    export default   connect(mapStateToProps)(UserProfile);