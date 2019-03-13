import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* deleteFavoriteCamps(action) {
    console.log('this is inside of deleteFavoriteCamps');
    try {
        const campId = action.payload.campId
        console.log(campId);
        yield axios.delete(`/api/favorite/${campId}`);
        const nextAction = { type: 'SET_FAVORITE_CAMPS' }
        yield put(nextAction)
    } catch (error) {
        console.log('error in deleteFavoriteCamp saga', error);
    }
}

function* updateFavoriteCamps(action) {
    console.log('this is updateFavoriteCamps');
    try {
        const campId = action.payload.campId
        yield axios.put(`/api/favorite/${campId}`);
        const nextAction = { type: 'SET_FAVORITE_CAMPS' }
        yield put(nextAction)
    } catch (error) {
        console.log('error in updateFavorietCamps', error);
    }
}

function* fetchFavoriteCamps() {
    console.log('this is inside fetchFavoriteCamp');
    try {
        const response = yield axios.get(`/api/favorite`);
        console.log(response);
        
        const nextAction = { type: 'SET_FAVORITE_CAMPS', payload: response.data}
        yield put(nextAction);

    } catch (error) {
        console.log('error in fetchFavorieCamps saga', error);
    }
}

function* favoriteSaga() {
    // delete favorite camps
    yield takeEvery('DELETE_FAVORITE_CAMPS', deleteFavoriteCamps);
    // update camps
    yield takeEvery('UPDATE_FAVORITE_CAMPS', updateFavoriteCamps);
    // get favorite camps
    yield takeEvery('FETCH_FAVORITE_CAMPS', fetchFavoriteCamps);






}

export default favoriteSaga;