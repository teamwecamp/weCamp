import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchCampItinerary (){
    try{
        const response = yield axios.get('/api/itinerary');
        const nextAction = {type: 'SET_CAMP_ITINERARY', payload: response.data}
        yield put(nextAction);
    }catch(error){
        console.log('there is error in fetchCampItinerary saga', error );
    }
}

function itinerarySaga(){
    yield takeEvery('FETCH_CAMP_ITINERARY', fetchCampItinerary);
}

export default itinerarySaga;