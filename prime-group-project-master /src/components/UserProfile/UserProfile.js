import React, { Component } from 'react';
import { connect } from 'react-redux';

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
        height: 145,
    },
};

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
        // { JSON.stringify(this.props.user) }
        // { JSON.stringify(this.props.child) }
        const { classes } = this.props;
        
        return (
           
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                    />
                   
                    
                    <CardContent>
                       
                        <Typography gutterBottom variant="h5" component="h2">
                          
                    </Typography>
                       

                       
                        <Typography component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                           
                    </Typography>
                      
                   
       
           
                    </CardContent>
                    
                     
                      
                    
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Update info
        </Button>
                    <Button size="small" color="primary">
                        Learn More
        </Button>
                </CardActions>
                 
            </Card>
        
        
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


    
export default withStyles(styles)  (connect(mapStateToProps)(UserProfile));