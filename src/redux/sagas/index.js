import { takeEvery, put, call, all } from 'redux-saga/effects'
import { getPosts, getComments } from '../../api/index'
import { GET_POSTS, GET_COMMENTS } from '../constants'
import { setPostsAction, setCommentsAction } from '../actions/actionCreator'

export function* handlePostsSaga() {
   const { data } = yield call(getPosts)
   yield put(setPostsAction(data))
}

export function* handleCommentsSaga({payload}) {
    const { data } = yield call(getComments, payload)
    yield put(setCommentsAction(data))
 }

export function* watchPostSaga() {
    yield takeEvery(GET_POSTS, handlePostsSaga)
}

export function* watchCommentsSaga() {
    yield takeEvery(GET_COMMENTS, handleCommentsSaga)
}

export default function* rootSaga() {
    yield all([watchPostSaga(), watchCommentsSaga()])
}