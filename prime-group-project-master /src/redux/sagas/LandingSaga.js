import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* getCamp(){
    try{
        const response = yield axios.get('/api/landing');
        const nextAction = {type: 'SET_RECENT_CAMPS'}
        yield put(nextAction);
    } catch (error) {
        console.log('error in getCamp saga', error);
    }
}

function* landingSaga(){
    yield takeEvery ('FETCH_RECENT_CAMPS', getCamp);
}

export default landingSaga;