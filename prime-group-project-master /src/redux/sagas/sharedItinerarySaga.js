import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchSharedItinerary(action) {
    
    try {
        console.log('in fetch shared itinerary saga', action.payload);
        const response = yield axios.get(`/sharedItinerary/${action.payload}`);
        const nextAction = { type: 'SET_SHARED_ITINERARY', payload: response.data }
        console.log('shared payload', response.data);
        
        yield put(nextAction);
    } catch (error) {
        console.log('there is error in fetchCampItinerary saga', error);
    }
}

function* itinerarySaga() {
    yield takeEvery('FETCH_SHARED_ITINERARY', fetchSharedItinerary);
}

export default itinerarySaga;