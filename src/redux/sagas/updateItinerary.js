import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* putUpdateItinerary(action){
    try{
        const itineraryId = action.payload.itineraryId
        yield axios.put(`/api/itinerary/${itineraryId}`);
        const nextAction = {type: 'SET_CAMP_ITINERARY'};
        yield put(nextAction);
    }catch(error){
        console.log('there is error in updateItinerary saga', error);
    }
}

function* updateItinerarySaga(){
    yield takeEvery('POST_UPDATE_ITINERARY', putUpdateItinerary);
}

export default updateItinerarySaga;