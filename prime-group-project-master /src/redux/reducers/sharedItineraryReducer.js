import { combineReducers } from 'redux';

const setSharedItinerary = (state = [], action) => {
    // console.log('in setCampItinerary');

    switch (action.type) {
        case 'SET_CAMP_ITINERARY':
            return action.payload;
        default:
            return state;
    }
};


export default combineReducers({
    setSharedItinerary,
});
