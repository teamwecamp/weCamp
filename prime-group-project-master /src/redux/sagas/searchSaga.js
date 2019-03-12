import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
// import { ServerResponse } from 'http';

function* fetchSearchCamps(){
    try{
        const response = yield axios.get('/api/search');
        const nextAction = {type: 'SET_SEARCH_CAMPS'}
        yield put(nextAction);

    }catch(error) {
        console.log('this is inside fetchSearchCamps saga', error)
    }

}


function* fetchSearchCampsDropDown() {
    try {
        const response = yield axios.get('/api/search/dropdown');
        console.log(response);
        const nextAction = { type: 'SET_CAMP_DROP_DOWN', payload:response.data };
        yield put(nextAction);

    } catch (error) {
        console.log('this is inside fetchSearchCamps saga', error)
    }

}

function* searchSaga(){
    takeEvery('FETCH_SEARCH_CAMPS', fetchSearchCamps);
    takeEvery('FETCH_SEARCH_CAMPS_DROP_DOWN', fetchSearchCampsDropDown);
}

export default searchSaga;