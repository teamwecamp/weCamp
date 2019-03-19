import React, {Component} from 'react';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';

class ItineraryShare extends Component {
    shareItinerary = () => {
        console.log(this.props.children);
        
    }
    render(){
        return(
            <Button variant="contained" color="primary" size="large" onClick={this.shareItinerary}>
                Share Itinerary
                </Button>
        )
    }
}

export default connect()(ItineraryShare);