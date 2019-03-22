import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import Swal from 'sweetalert2';

function* fetchCampItinerary (){
    try{
        const response = yield axios.get('/api/itinerary');
        const nextAction = {type: 'SET_CAMP_ITINERARY', payload: response.data}
        yield put(nextAction);
    }catch(error){
        console.log('there is error in fetchCampItinerary saga', error );
        Swal.fire('something went wrong')
    }
}

function* itinerarySaga(){
    yield takeEvery('FETCH_CAMP_ITINERARY', fetchCampItinerary);
}

export default itinerarySaga;