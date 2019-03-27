

import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';

// Sagas 
import LandingSaga from './LandingSaga';
import FavoriteSaga from './FavoriteSaga';
import searchSaga from './searchSaga';
import updateItinerarySaga from './updateItinerary';
import itinerarySaga from './itinerarySaga';
import sharedSaga from './sharedSaga';
import userProfileSaga from './userProfileSaga';
import campRegistrationSaga from './campRegistrationSaga';
import userRegistrationSaga from './userRegistrationSaga';
import viewCamp from './viewCampSaga';
import SharedItinerarySaga from './sharedItinerarySaga';
 


// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    LandingSaga(),
    FavoriteSaga(),
    searchSaga(),
    updateItinerarySaga(),
    itinerarySaga(),
    sharedSaga(),
    userProfileSaga(),
    campRegistrationSaga(),
    userRegistrationSaga(),
    viewCamp(),
    SharedItinerarySaga(),
  ]);
}