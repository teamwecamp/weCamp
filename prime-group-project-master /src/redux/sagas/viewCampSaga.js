import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchCampDetails(action) {
    console.log('this is fetchCampDetails')
    try {
        const response = yield axios.get(`/api/viewcamps/${action.payload}`);
        console.log(response.data[0]);

        yield put({ type: 'SET_VIEW_CAMPS_DETAILS', payload: response.data[0] });
    } catch (error) {
        console.log('there is an error in putUserRegistration', error);
    }
}

function* userRegistrationSaga() {
    yield takeEvery('FETCH_CAMP_DETAILS', fetchCampDetails);
}

export default userRegistrationSaga;