import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* deleteFavoriteCamps(action) {
    try {
        const campId = action.payload
        console.log(campId);
        yield axios.put(`/api/favorite/${campId}`);
        const nextAction = { type: 'FETCH_FAVORITE_CAMPS' }
        yield put(nextAction)
    } catch (error) {
        console.log('error in deleteFavoriteCamp saga', error);
    }
}


function* updateFavoriteCamps(action) {
    try {
        const favorite = action.payload
        console.log(favorite);
        
        yield axios.post(`/api/favorite/`, favorite);
        const nextAction = { type: 'FETCH_FAVORITE_CAMPS' }
        yield put(nextAction)
    } catch (error) {
        console.log('error in updateFavorietCamps', error);
    }
}

function* fetchFavoriteCamps() {
    try {
        const response = yield axios.get(`/api/favorite`);
        console.log(response.data);
        const nextAction = { type: 'SET_FAVORITE_CAMPS', payload: response.data}
        yield put(nextAction);

    } catch (error) {
        console.log('error in fetchFavorieCamps saga', error);
    }
}

function* fetchResultsForDev() {
    try {
        const response = yield axios.get(`/api/results`);
        console.log(response.data);
        const nextAction = { type: 'SET_RESULTS', payload: response.data }
        yield put(nextAction);
    } catch (error) {
        console.log('error in fetchResults saga', error);
    }
}

function* fetchUserChild() {
    try {
        const response = yield axios.get(`/api/favorite/userChild`);
        console.log(response.data);
        const nextAction = { type: 'SET_USER_CHILD', payload: response.data }
        yield put(nextAction);
    } catch (error) {
        console.log('error in fetchUserChild saga', error);
    }
}

function* favoriteSaga() {
    // delete favorite camps
    yield takeEvery('REMOVE_FAVORITE_CAMP', deleteFavoriteCamps);
    // update camps
    yield takeEvery('ADD_FAVORITE_CAMP', updateFavoriteCamps);
    // get favorite camps
    yield takeEvery('FETCH_FAVORITE_CAMPS', fetchFavoriteCamps);
    yield takeEvery('FETCH_USER_CHILD', fetchUserChild);
}



export default favoriteSaga;