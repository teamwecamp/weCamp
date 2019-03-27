import { combineReducers } from 'redux';

const setSharedItinerary = (state = [], action) => {
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
