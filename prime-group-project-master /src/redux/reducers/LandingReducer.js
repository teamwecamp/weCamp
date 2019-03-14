import { combineReducers } from 'redux';


const setRecentCamps = (state = [], action) => {
    // console.log('in setRecentCamps');

    switch (action.type) {
        case 'SET_RECENT_CAMPS':
            return action.payload;
        default:
            return state;
    }
};

const setSponsoredCamps = (state = [], action) => {
    // console.log('in setSponsoredCamps');

    switch (action.type) {
        case 'SET_SPONSORED_CAMPS':
            return action.payload;
        default:
            return state;
    }
};

export default combineReducers({
    setRecentCamps,
    setSponsoredCamps,
});


