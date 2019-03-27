import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import Swal from 'sweetalert2';

function* fetchSearchCamps(action){
    console.log('this is state from search', action.payload)
    try{
        const response = yield axios.get(`/api/search/searchresult`, {params: action.payload});
        const nextAction = {type: 'SET_SEARCH_CAMPS', payload: response.data}
        yield put(nextAction);
    }catch(error) {
        console.log('this is inside fetchSearchCamps saga', error)
        Swal.fire('something went wrong')
    }
}


function* fetchSearchCampsDropDown() {
    console.log('this is in fetchSearchCampsDropDown');
    try {
        const response = yield axios.get('/api/search/dropdown');
        const nextAction = { type: 'SET_CAMP_DROP_DOWN', payload:response.data };
        yield put(nextAction);
    } catch (error) {
        console.log('this is inside fetchSearchCamps saga', error)
    }
}

function* searchSaga(){
   yield takeEvery('FETCH_SEARCH_CAMPS', fetchSearchCamps);
   yield takeEvery('FETCH_SEARCH_CAMPS_DROP_DOWN', fetchSearchCampsDropDown);
}

export default searchSaga;