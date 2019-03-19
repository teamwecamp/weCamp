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



const styles = {
    card: {
        maxWidth: 100,
    },
    media: {
        height: 100,
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
        
      
        return (
           
            

            <Card  >
                <CardActionArea>
                    <CardMedia
                        // className={classes.media}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                    </Typography>
                        <Typography component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
          </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
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

// MediaCard.propTypes = {
//     classes: PropTypes.object.isRequired,
// };


    
export default  connect(mapStateToProps)(UserProfile);