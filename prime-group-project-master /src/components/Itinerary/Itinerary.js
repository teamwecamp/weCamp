import React, { Component } from 'react';
import { connect } from 'react-redux';


class Itinerary extends Component {
    componentDidMount=()=> {
        this.setCampItinerary();
    }

    setCampItinerary(){
        const action = {type:'FETCH_CAMP_ITINERARY'}
        this.props.dispatch(action);
    }

    render() {
        return (
            <div>Itinerary
                {JSON.stringify(this.props.itinerary)}
            </div>

        )
    }
}

const mapStateToProps = (reduxStore) => ({
    itinerary: reduxStore.setCampItinerary.setCampItinerary
});
export default connect(mapStateToProps)(Itinerary);