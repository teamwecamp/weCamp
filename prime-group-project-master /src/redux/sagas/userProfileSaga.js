import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchUserProfileInfo(action){
    try{
        const userId = action.payload.userId
        const response = yield axios.get(`/api/userProfileInfo/${userId}`);
        const nextAction = { type: 'SET_USER_PROFILE_INFO', payload: response.data};
        yield put(nextAction);
    }catch(error){
     console.log('there is error in fetchUserProfileInfo', error);
    }
    
}

function* userProfileInfo(){
    yield takeEvery('FETCH_USER_PROFILE_INFO', fetchUserProfileInfo);
}

export default userProfileInfo;