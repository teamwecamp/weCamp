import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* postUpdateItinerary(action){
    // console.log('this is postUpdateItinerary saga');
    try{
        const itineraryId = action.payload.itineraryId
        yield axios.put(`/api/itinerary/${itineraryId}`);
        const nextAction = {type: 'SET_CAMP_ITINERARY'};
        yield put(nextAction);
    }catch(error){
        console.log('there is error in update itinerary in updateItinerary saga', error);
    }
}

function* updateItinerarySaga(){
    yield takeEvery('POST_UPDATE_ITINERARY', postUpdateItinerary);
}

export default updateItinerarySaga;