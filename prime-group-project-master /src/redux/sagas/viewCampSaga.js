import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import Swal from 'sweetalert2';

function* fetchStatus() {
    try {
        const response = yield axios.get(`api/viewcamps/status`);
        console.log('this is fetchStatus saga', response.data);
        yield put({ type: 'SET_STATUS', payload: response.data });
    } catch (error) {
        console.log('there is error in fetchStatus');
    }
}

function* fetchCampDetails(action) {
    // console.log('this is fetchCampDetails')
    try {
        const response = yield axios.get(`/api/viewcamps/${action.payload}`);
        console.log(response.data[0]);
        yield put({ type: 'SET_VIEW_CAMPS_DETAILS', payload: response.data[0] });
    } catch (error) {
        console.log('there is an error in fetchCampDetails', error);
        Swal('something went wrong');
    }
}

// this function gets the camp program/schedule info.
function* fetchCampProgram(action){
    try{
        const response = yield axios.get(`api/viewcamps/viewProgram/${action.payload}`);
        console.log('this is in fetchCampProgram',response.data);
        yield put({type: 'SET_VIEW_CAMPS_PROGRAM', payload: response.data});
    }catch (error){
        console.log('there is an error in fetchCampProgram');
        Swal('something went wrong');
    }
}


function* userRegistrationSaga() {
    yield takeEvery('FETCH_CAMP_DETAILS', fetchCampDetails);
    // this gets the camp program schedule.
    yield takeEvery('FETCH_CAMP_PROGRAMS', fetchCampProgram);
    // gets the status of what the parents wants to tag to the child itinerary
    yield takeEvery('FETCH_STATUS', fetchStatus);
}

export default userRegistrationSaga;