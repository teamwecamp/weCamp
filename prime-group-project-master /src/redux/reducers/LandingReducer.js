import { combineReducers } from 'redux';

const setRecentCamps = (state = [], action) => {
    console.log('in setRecentCamps');

    switch (action.type) {
        case '':
            return action.payload;
        default:
            return state;
    }
};

const setSponsoredCamps = (state = [], action) => {
    console.log('in setSponsoredCamps');

    switch (action.type) {
        case '':
            return action.payload;
        default:
            return state;
    }
};

export default combineReducers({
    setRecentCamps,
    setSponsoredCamps,
});
