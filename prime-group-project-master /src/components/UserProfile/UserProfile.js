import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    control: {
        padding: theme.spacing.unit * 2,
    },
    pos: {
        marginBottom: 12,
    },
});





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