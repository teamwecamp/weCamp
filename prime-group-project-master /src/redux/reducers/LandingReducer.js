import { combineReducers } from 'redux';

const recentCamps = (state = [], action) => {
    if(action.type === 'SET_RECENT_CAMPS'){
        return action.payload;
    }
    return state;
}

const sponsoredCamps = (state = [], action) => {
    if(action.type === 'SET_SPONSORED_CAMPS'){
        return action.payload;
    }
    return state;
} 

export default combineReducers({
    recentCamps,
    sponsoredCamps
})