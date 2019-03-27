import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import Swal from 'sweetalert2';

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
        const nextAction = yield { type: 'SET_SHARED_ACCESS', payload: response.data }
        yield put(nextAction);
    }catch(error) {
        console.log('error in fetchsharedwithuser saga', error);
        
    }
}

function* fetchUserSharedWith () {
    try {
        const response = yield axios.get('api/sharedaccess/userSharedWith')
        const nextAction = yield {type: 'SET_SHARED_ACCESS', payload: response.data }
        yield put(nextAction);
    }catch(error) {
        console.log('error in fetchusersharedwith', error);
        
    }
}

function* addSharedAccess(action){
    try{
        const shareInfo = action.payload;
        yield axios.post(`/api/sharedAccess`, shareInfo);
    } catch (error) {
        console.log('there is error in addSharedAcess saga', error);
    }
}

//match user to share against database and pull user id
function* matchUser(action) {
    try {
        const newShare = action.payload;
        const email = action.payload.email;
        const response = yield axios.get(`api/sharedAccess/user/${email}`);
        newShare.id = response.data[0].id;
        //send new guest with id to reducer
        yield put({ type: 'ADD_SHARED_ACCESS', payload: newShare })
    } catch (error) {
        yield console.log('error in matchGuest', error);
        Swal.fire('Email is not tied to a user. Send them an email to suggest they register.')
    }
}

function* sharedSaga(){
    yield takeEvery('UPDATE_SHARED_ACCESS', updateSharedAccess);
    yield takeEvery('DELETE_SHARED_ACCESS', deleteSharedAccess);
    yield takeEvery('ADD_SHARED_ACCESS', addSharedAccess);
    yield takeEvery('MATCH_USER', matchUser);
    yield takeEvery('FETCH_SHARED_WITH_USER', fetchSharedWithUser);
    yield takeEvery('FETCH_USER_SHARED_WITH', fetchUserSharedWith);
}

export default sharedSaga;