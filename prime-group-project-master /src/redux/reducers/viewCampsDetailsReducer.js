import { combineReducers } from 'redux';

const setViewCampsDetails = (state = [], action) => {
    console.log('in setRecentCamps');

    switch (action.type) {
        case 'SET_VIEW_CAMPS_DETAILS':
            return action.payload;
        default:
            return state;
    }
};



export default combineReducers({
    setViewCampsDetails,
});
