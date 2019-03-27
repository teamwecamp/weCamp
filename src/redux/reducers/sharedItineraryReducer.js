import { combineReducers } from 'redux';

const setSharedItinerary = (state = [], action) => {
    // console.log('in setSharedItinerary', action.payload);

    switch (action.type) {
        case 'SET_SHARED_ITINERARY':
            return action.payload;
        default:
            return state;
    }
};


export default combineReducers({
    setSharedItinerary,
});
