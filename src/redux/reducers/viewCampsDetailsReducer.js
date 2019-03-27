import { combineReducers } from 'redux';

const setViewCampsDetails = (state = [], action) => {
    // console.log('in setRecentCamps');
    switch (action.type) {
        case 'SET_VIEW_CAMPS_DETAILS':
            return action.payload;
        default:
            return state;
    }
};

const setViewCampsPrograms = (state = [], action) => {
    // console.log('this is in setViewCampProgram');

    switch (action.type) {
        case 'SET_VIEW_CAMPS_PROGRAM':
            return action.payload;
        default:
            return state;
    }
};

const setStatus = (state = [], action) => {
    // console.log('this is setStatus reducer');
    switch (action.type) {
        case 'SET_STATUS':
            return action.payload;
        default:
            return state;
    }

};

export default combineReducers({
    setViewCampsDetails,
    setViewCampsPrograms,
    setStatus,
});
