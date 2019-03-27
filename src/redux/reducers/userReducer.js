import { combineReducers } from 'redux';

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.payload;
    case 'UNSET_USER':
      return {};
    default:
      return state;
  }
};

const setUserProfileInfo = (state=[], action)=>{
  switch (action.type) {
    case 'SET_USER_PROFILE_INFO':
      return action.payload;
    default:
      return state;
  }
};


const setChildProfileInfo = (state = [], action) => {
  switch (action.type) {
    case 'SET_CHILD_PROFILE_INFO':
      return action.payload;
    default:
      return state;
  }
};


export default combineReducers({
  userReducer,
  setUserProfileInfo,
  setChildProfileInfo,
});


