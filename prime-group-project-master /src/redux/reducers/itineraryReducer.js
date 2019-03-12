import { combineReducers } from 'redux';

const setCampItinerary = (state = [], action) => {
    console.log('in setCampItinerary');

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
