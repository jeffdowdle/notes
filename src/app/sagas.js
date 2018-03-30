import {all} from 'redux-saga/effects'

import {signInSaga, authStateSaga} from './auth/auth.sagas'

export default function* rootSaga() {
    yield all([
        signInSaga(),
        authStateSaga(),
    ])
}