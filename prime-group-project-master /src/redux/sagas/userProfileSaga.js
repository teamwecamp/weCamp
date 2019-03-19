import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchUserProfileInfo(){
    try{
        // const userId = action.payload.userId
        // ${ userId }
        const response = yield axios.get('/api/userprofileinfo/user');
        const nextAction = { type: 'SET_USER_PROFILE_INFO', payload: response.data};
        yield put(nextAction);
    }catch(error){
     console.log('there is error in fetchUserProfileInfo', error);
    }
    
}


function* fetchChildProfileInfo() {
    try {
        // const userId = action.payload.userId
        const response = yield axios.get('/api/userprofileinfo/child');
        const nextAction = { type: 'SET_CHILD_PROFILE_INFO', payload: response.data };
        yield put(nextAction);
    } catch (error) {
        console.log('there is error in fetchUserProfileInfo', error);
    }

}

function* userProfileInfo(){
    yield takeEvery('FETCH_USER_PROFILE_INFO', fetchUserProfileInfo);
    yield takeEvery('FETCH_CHILD_PROFILE_INFO', fetchChildProfileInfo);
}

export default userProfileInfo;