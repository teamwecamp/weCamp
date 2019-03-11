import { combineReducers } from 'redux';

const campName = (state = [], action) => {
    if(action.type === 'SET_RECENT_CAMPS'){
        return action.payload;
    }
    return state;
}

export default combineReducers({
    campName
})