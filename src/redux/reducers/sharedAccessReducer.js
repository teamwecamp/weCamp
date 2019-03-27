import { combineReducers } from 'redux';

const setSharedAccess = (state = [], action) => {
    switch (action.type) {
        case 'SET_SHARED_ACCESS':
            return action.payload;
        default:
            return state;
    }
};


export default combineReducers({
    setSharedAccess,
});
