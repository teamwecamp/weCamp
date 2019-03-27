import { combineReducers } from 'redux';

const setViewCampsDetails = (state = [], action) => {
    switch (action.type) {
        case 'SET_VIEW_CAMPS_DETAILS':
            return action.payload;
        default:
            return state;
    }
};

const setViewCampsPrograms = (state = [], action) => {
    switch (action.type) {
        case 'SET_VIEW_CAMPS_PROGRAM':
            return action.payload;
        default:
            return state;
    }
};

const setStatus = (state = [], action) => {
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
