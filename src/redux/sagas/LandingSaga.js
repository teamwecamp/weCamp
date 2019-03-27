import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* fetchRecentCamps(){
    try{
        const response = yield axios.get('/api/landing/recentCamps');
        const nextAction = {type: 'SET_RECENT_CAMPS', payload: response.data}
        yield put(nextAction);
    } catch (error) {
        console.log('error in getCamp saga', error);
    }
}

function* fetchSponsoredCamps () {
    try{
        const response = yield axios.get('/api/landing/sponsoredCamps');
        const nextAction = yield {type: 'SET_SPONSORED_CAMPS', payload: response.data}
        yield put(nextAction);
    }catch (error) {
        console.log('error in fetchSponsoredCamps saga', error)
    }
}

function* landingSaga(){
    // gets all recent camps to display onto landing page
    yield takeEvery ('FETCH_RECENT_CAMPS', fetchRecentCamps);
    // gets all sponsored camp to display onto landing page
    yield takeEvery ('FETCH_SPONSORED_CAMPS', fetchSponsoredCamps)
}

export default landingSaga;