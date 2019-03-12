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

// gets the camp for our drop down
const setCampDropDown = (state= {}, action ) =>{
    console.log('in setCampDropDown reducer');

    switch (action.type){
        case 'SET_CAMP_DROP_DOWN':
        return action.payload;
        default: 
        return state;
    }

}



export default combineReducers({
    setSearchCamps,
    setCampDropDown,
});
