import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import Swal from 'sweetalert2';

function* updateSharedAcess(action){
    console.log('this is inside updateSharedAcess')
    try{
        const sharedId = action.payload.sharedId
        yield axios.put(`/api/sharedAcess/${sharedId}`);
        const nextAction = {type: 'SET_SHARED_ACCESS'}
        yield put(nextAction);
    }catch(error){
        console.log('there is error in updateSharedAcess saga', error);
    }

}

function* deleteSharedAcess(action){
    // console.log('this is in deleteSharedAcess');
    try{
        const sharedId = action.payload.sharedId
        yield axios.delete(`/api/sharedAcess/${sharedId}`);
        const nextAction = {type: 'SET_SHARED_ACESS'}
        yield put(nextAction)
    }catch(error){
        console.log('there is error in deleteSharedAcess saga', error);
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
        console.log(action.payload);
        const newShare = action.payload;
        const email = action.payload.email;
        const response = yield axios.get(`api/sharedAccess/user/${email}`);
        console.log(response);
        newShare.id = response.data[0].id;
        console.log(newShare);
        //send new guest with id to reducer
        yield put({ type: 'ADD_SHARED_ACCESS', payload: newShare })
    } catch (error) {
        yield console.log('error in matchGuest', error);
        Swal.fire('Guest is not a user. Send them an email to suggest they register.')
    }
}

function* sharedSaga(){
    yield takeEvery('UPDATE_SHARED_ACCESS', updateSharedAcess);
    yield takeEvery('DELETE_SHARED_ACCESS', deleteSharedAcess);
    yield takeEvery('ADD_SHARED_ACCESS', addSharedAccess);
    yield takeEvery('MATCH_USER', matchUser)
}

export default sharedSaga;