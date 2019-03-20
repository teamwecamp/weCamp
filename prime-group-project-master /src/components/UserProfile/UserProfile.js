import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserProfileChild from './UserProfileChild';

// material UI cards
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';







// matrial UI styles
const styles = theme => ({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 100,
    },
    // grid list
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
    state ={
        spacing: ''
    }

    
    componentDidMount = () => {
        this.setUserProfileInfo();

    }

    // this get user's profile
    setUserProfileInfo() {
        const action = {
            type: 'FETCH_USER_PROFILE_INFO'
        }
        this.props.dispatch(action);
    }

    // this gets child's profile

    handleEdit = (event) => {
        console.log('this is handleEdit');

    }



    render() {
        
        const { classes } = this.props;
        const { spacing } = this.state;

        return (
           
            <div>

                {this.props.user.setUserProfileInfo !== undefined && this.props.user.setUserProfileInfo.map(member => (
                    <Grid container className={classes.root} justify="center" spacing={Number(spacing)}>
                    <Card className={classes.card}>


                        <CardActionArea >
                            <CardMedia
                                className={classes.media}
                                image=""
                                title=""
                            />


                            <CardContent>

                                <Typography gutterBottom variant="h5" component="h2">
                                    {member.full_name}
                                </Typography>
                                <Typography component="p">
                                    {member.email}
                                </Typography>
                                <Typography component="p">
                                    {member.street_address}
                                </Typography>
                                <Typography component="p">
                                    {member.city}, {member.state} {member.zip}
                                </Typography>

                            </CardContent>


                        </CardActionArea>


                        <CardActions>
                            <Button size="small" color="primary" onClick={this.handleEdit}>Edit</Button>

                        </CardActions>


                    </Card>
                    </Grid>
                      
               
                     
          ))}
                <UserProfileChild />






            </div>
           


        );
    }
}









const mapStateToProps = (reduxStore) => ({
    user: reduxStore.setUserProfileInfo,
    child: reduxStore.setChildProfileInfo
});

UserProfile.propTypes = {
    classes: PropTypes.object.isRequired,
};



export default withStyles(styles)(connect(mapStateToProps)(UserProfile));