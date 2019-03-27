import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* putUserRegistration (action){
    try{
        const registerId = action.payload.registerId
        yield axios.put(`/api/user/${registerId}`)
        const nextAction = {type: 'UPDATE_USER_REGISTRATION'};
        yield put(nextAction);
    }catch (error ){
        console.log('there is an error in putUserRegistration', error);
    }
}

function* userRegistrationSaga(){
    yield takeEvery('PUT_USER_REGISTRATION', putUserRegistration);
}

export default userRegistrationSaga;