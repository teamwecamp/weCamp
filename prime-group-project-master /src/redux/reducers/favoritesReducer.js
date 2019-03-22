import { combineReducers } from 'redux';

const setFavoriteCamps = (state = [], action) => {
    switch (action.type) {
        case 'SET_FAVORITE_CAMPS':
            return action.payload;
        default:
            return state;
    }
}

//for Dev
const defaultCamp = [{
    Name: 'Test Camp',
}];

const setResultsForDev = (state = defaultCamp, action) => {
    switch(action.type) {
        case 'SET_RESULTS':
            return action.payload;
        default: 
            return state;
    }
}

const setUserChild = (state = {}, action) => {
    switch(action.type){
        case 'SET_USER_CHILD':
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({
    setFavoriteCamps,
    setResultsForDev,
    setUserChild,
});
