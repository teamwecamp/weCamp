import { combineReducers } from 'redux';

const setCampItinerary = (state = [], action) => {
    switch (action.type) {
        case 'SET_CAMP_ITINERARY':
            return action.payload;
        default:
            return state;
    }
};


export default combineReducers({
    setCampItinerary,
});
