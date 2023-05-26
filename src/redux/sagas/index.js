import { takeEvery, put, call, all } from 'redux-saga/effects'
import { getPosts, getComments, getUser } from '../../api/index'
import { GET_POSTS, GET_COMMENTS, GET_USER, SET_POSTS_ERROR, SET_COMMENTS_ERROR, SET_USER_ERROR } from '../constants'
import { setPostsAction, setCommentsAction, setUserAction } from '../actions/actionCreator'

// искуссвенная задержка для отображения лоудера
const delay = (sec) => new Promise((resolve, reject) => {
    setTimeout(resolve, sec * 1000)
}) 

export function* handlePostsSaga() {
    try {
        yield delay(1)
        const { data } = yield call(getPosts)
        yield put(setPostsAction(data))
    }
   catch {
        yield put({type: SET_POSTS_ERROR, payload: 'Ошибка при получении постов'})
   }
}

export function* handleCommentsSaga({payload}) {
    try {
        yield delay(1)
        const { data } = yield call(getComments, payload)
        yield put(setCommentsAction(data))
    }
    catch {
        yield put({type: SET_COMMENTS_ERROR, payload: 'Ошибка при получении комментариев'})
    }
 }

export function* handleUserSaga({payload}) {
    try {
        const { data } = yield call(getUser, payload)
        yield put(setUserAction(data[0]))
    }
    catch {
        yield put({type: SET_USER_ERROR, payload: 'Ошибка при получении пользователя'})
    }
   
 }

export function* watchPostSaga() {
    yield takeEvery(GET_POSTS, handlePostsSaga)
}

export function* watchCommentsSaga() {
    yield takeEvery(GET_COMMENTS, handleCommentsSaga)
}

export function* watchUserSaga() {
    yield takeEvery(GET_USER, handleUserSaga)
}


export default function* rootSaga() {
    yield all([watchPostSaga(), watchCommentsSaga(), watchUserSaga()])
}