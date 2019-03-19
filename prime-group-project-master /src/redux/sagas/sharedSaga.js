import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* updateSharedAccess(action){
    console.log('this is inside updateSharedaccess')
    try{
        const sharedId = action.payload.sharedId
        yield axios.put(`/api/sharedaccess/${sharedId}`);
        const nextAction = {type: 'SET_SHARED_ACCESS'}
        yield put(nextAction);
    }catch(error){
        console.log('there is error in updateSharedaccess saga', error);
    }

}

function* deleteSharedAccess(action){
    console.log('delete saga', action.payload);
    try{
        const sharedId = action.payload
        yield axios.delete(`/api/sharedaccess/${sharedId}`);
        const nextAction = {type: 'SET_SHARED_ACCESS'}
        yield put(nextAction)
    }catch(error){
        console.log('there is error in deleteSharedaccess saga', error);
    }
}

function* fetchSharedWithUser () {
    try{
        const response = yield axios.get('/api/sharedaccess/sharedWithUser')
        console.log('response', response.rows);
        const nextAction = yield { type: 'SET_SHARED_ACCESS', payload: response.data }
        yield put(nextAction);
    }catch(error) {
        console.log('error in fetchsharedwithuser saga', error);
        
    }
}

function* fetchUserSharedWith () {
    try {
        const response = yield axios.get('api/sharedaccess/userSharedWith')
        console.log('response', response.rows);
        const nextAction = yield {type: 'SET_SHARED_ACCESS', payload: response.data }
        yield put(nextAction);
        
    }catch(error) {
        console.log('error in fetchusersharedwith', error);
        
    }
}

function* sharedSaga(){
    yield takeEvery('UPDATE_SHARED_ACCESS', updateSharedAccess);
    yield takeEvery('DELETE_SHARED_ACCESS', deleteSharedAccess);
    yield takeEvery('SET_SHARED_WITH_USER', fetchSharedWithUser);
    yield takeEvery('SET_USER_SHARED_WITH', fetchUserSharedWith)
}

export default sharedSaga;