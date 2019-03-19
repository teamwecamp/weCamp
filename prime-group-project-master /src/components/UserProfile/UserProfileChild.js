import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

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


// matrial UI styles
const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
};


class UserProfileChild extends Component {


    componentDidMount = () => {
        this.fetchChildInfo();
    }


    fetchChildInfo() {
        const action = {
            type: 'FETCH_CHILD_PROFILE_INFO'
        }
        this.props.dispatch(action)
    }


    render() {

        const { classes } = this.props;


        return (
            <Card className={classes.card}>


                <CardActionArea >
                    <CardMedia
                        className={classes.media}
                        image=""
                        title=""
                    />

                    {this.props.user.setChildProfileInfo !== undefined && this.props.user.setChildProfileInfo.map(child => (
                        <CardContent>

                            <Typography gutterBottom variant="h5" component="h2">
                                {child.name}
                            </Typography>
                            <Typography component="p">
                                {moment(child.DOB).format("MMMM D YYYY")}
                            </Typography>


                        </CardContent>
                    ))}

                </CardActionArea>


                <CardActions>
                    <Button size="small" color="primary" onClick={this.handleEdit}>Edit</Button>

                </CardActions>


            </Card>



        )
    }
}

const mapStateToProps = (reduxStore) => ({
    user: reduxStore.setUserProfileInfo,

});

UserProfileChild.propTypes = {
    classes: PropTypes.object.isRequired,
};



export default withStyles(styles)(connect(mapStateToProps)(UserProfileChild));