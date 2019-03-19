import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

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

function* sharedSaga(){
    yield takeEvery('UPDATE_SHARED_ACCESS', updateSharedAcess);
    yield takeEvery('DELETE_SHARED_ACCESS', deleteSharedAcess);
    yield takeEvery('ADD_SHARED_ACCESS', addSharedAccess);
}

export default sharedSaga;