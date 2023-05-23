import { takeEvery, put, call } from 'redux-saga/effects'
import { getPosts } from '../../api/index'
import { GET_POSTS } from '../constants'
import { setPostsAction } from '../actions/actionCreator'

export function* handlePostsSaga() {
   const { data } = yield call(getPosts)
   yield put(setPostsAction(data))
}

export function* watchPostSaga() {
    yield takeEvery(GET_POSTS, handlePostsSaga)
}
export default function* rootSaga() {
    yield watchPostSaga()
}