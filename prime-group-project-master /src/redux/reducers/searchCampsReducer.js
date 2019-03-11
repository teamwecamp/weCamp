import { combineReducers } from 'redux';

const setSearchCamps = (state = [], action) => {
    console.log('in setRecentCamps');

    switch (action.type) {
        case 'SET_SEARCH_CAMPS':
            return action.payload;
        default:
            return state;
    }
};



export default combineReducers({
    setSearchCamps,
});
