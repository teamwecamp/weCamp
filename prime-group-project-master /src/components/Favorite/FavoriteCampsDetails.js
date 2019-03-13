import React, { Component } from 'react';


class FavoriteCampsDetails extends Component {

    moveToCamp = () => {
        console.log(this.props.camp);
        const camp = { eventId: this.props.camp.id };
        this.props.dispatch({ type: 'SET_CAMP_ID', payload: camp });
        this.props.moveToEvent('/hostpage');
    }


    render() {
        return (
            <div>Details</div>
        )
    }
}

export default FavoriteCampsDetails;