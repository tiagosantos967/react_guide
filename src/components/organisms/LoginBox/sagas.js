import { call, takeEvery, fork, put } from 'redux-saga/effects'
import { success, error, LOGIN_REQUEST } from './actions'

export function* login(api, action) {
    try {
        const loginResult = yield call(api.login, 'username', 'password')
        yield put(success(loginResult))
    } catch (e) {
        yield put(error(e))
    }
}

export function* watchFind(api) {
    yield takeEvery(LOGIN_REQUEST, login, api)
}

export default function* ({api}) {
    yield fork(watchFind, api)
}