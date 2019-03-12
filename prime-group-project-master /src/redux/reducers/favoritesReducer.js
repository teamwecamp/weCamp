import { combineReducers } from 'redux';

const setFavoriteCamps = (state = [], action) => {
    console.log('in setRecentCamps');

    switch (action.type) {
        case 'SET_FAVORITE_CAMPS':
            return action.payload;
        default:
            return state;
    }
};



export default combineReducers({
    setFavoriteCamps,
});
