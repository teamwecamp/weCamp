import { combineReducers } from 'redux';
import errors from './errorsReducer';
import loginMode from './loginModeReducer';
import user from './userReducer';

import setUserProfileInfo from './userReducer';
import Landing from './LandingReducer';
import setFavoriteCamps from './favoritesReducer';
import setSearchCamps from './searchCampsReducer';
import setViewCampsDetails from './viewCampsDetailsReducer';
import setCampItinerary from './itineraryReducer';
import setSharedAccess from './sharedAccessReducer';
import setSharedItinerary from './sharedItineraryReducer';




// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  loginMode, // will have a value of 'login' or 'registration' to control which screen is shown
  user, // will have an id and username if someone is logged in
  setFavoriteCamps, // copntains favorited camps
  Landing,
  setSearchCamps, //contains results of user searched camps
  setViewCampsDetails, //contains program details of camps
  setCampItinerary, //will contain child's camp itinerary
  setUserProfileInfo, //will contain user's profiel info
  setSharedAccess, //will contain member's who user has shared access with 
  setSharedItinerary, //will contain itinary of child shared with user
});

export default rootReducer;
