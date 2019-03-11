

import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';

// Sagas 
import landingSaga from './landingSaga';
import favoriteSaga from './favoriteSaga';
import searchSaga from './searchSaga';
import updateItinerarySaga from './updateItinerary';
import itinerarySaga from './itinerarySaga';
import sharedSaga from './sharedSaga';
import userProfileSaga from './userProfileSaga';
import campRegistrationSaga from './campRegistrationSaga';
import userRegistrationSaga from './userRegistrationSaga';



// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    landingSaga(),
    favoriteSaga(),
    searchSaga(),
    updateItinerarySaga(),
    itinerarySaga(),
    sharedSaga(),
    userProfileSaga(),
    campRegistrationSaga(),
    userRegistrationSaga(),
  ]);
}