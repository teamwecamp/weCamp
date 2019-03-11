import React, { Component } from 'react';
import { connect } from 'react-redux';


class Itinerary extends Component {

    componentDidMount=()=> {
        this.setCampItinerary();
    }

    setCampItinerary(){
        const action = {type:'SET_CAMP_ITINERARY'}
        this.props.dispatch(action);
    }
    render() {
        return (
            <div>Itinerary
                {JSON.stringify(this.props.reduxStore.setCampItinerary)}
            </div>

        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapStateToProps)(Itinerary);