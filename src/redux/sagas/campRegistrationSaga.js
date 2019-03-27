import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* addCampRegistration(action){
    try{
        yield axios.post('/api/campRegistration', action.payload);
        const nextAction = {type: 'SET_CAMP_REGISTRATION'};
        yield put(nextAction);

    }catch(error) {
        console.log('there is error in postCampRegistration', error)
    }
}

function* putCampRegistration (action){
    try{
      const campId = action.payload.campId
      yield axios.put(`/api/campRegisrration/${campId}`);
      const nextAction = {type: 'SET_CAMP_REGISTRATION'}
      yield put(nextAction);
    }catch(error){
        console.log('there is an error in updateCampRegistration', error);
    }
}

function* campRegistrationSaga(){
    yield takeEvery ('PUT_CAMP_REGISTRATION', putCampRegistration);
    yield takeEvery ('ADD_CAMP_REGISTRATION', addCampRegistration);
}



export default campRegistrationSaga;




