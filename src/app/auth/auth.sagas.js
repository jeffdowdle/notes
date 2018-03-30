import { eventChannel, END } from 'redux-saga'
import {put, takeEvery, call, take} from 'redux-saga/effects'
import * as firebase from 'firebase';
import { SIGNIN_REQUESTED } from './auth.constants';
import * as authActions from './auth.actions';

function* handleSignIn(action) {
    const firebaseAuth = firebase.auth()

    try {
        const response = yield call(
            firebaseAuth.signInWithEmailAndPassword.bind(firebaseAuth), 
            action.email,
            action.password,
        );

        yield put(authActions.signInSucceeded(response))
    } catch (error) {
        console.error(error);
        yield put(authActions.signInFailed(error))
    }
}

export function* signInSaga() {
    yield takeEvery(SIGNIN_REQUESTED, handleSignIn)
}

function authStateEventChannel() {
    const authSubscriber = emitter => {
        const unsubscribe = firebase.auth().onAuthStateChanged(
            user => {
                emitter({ user });
            },
        );

        // The subscriber must return an unsubscribe function
        return unsubscribe;
    }

    return eventChannel(authSubscriber);
}

export function* authStateSaga() {
    const channel = yield call(authStateEventChannel);
    
    try {    
        while (true) {
            // take(END) will cause the saga to terminate by jumping to the finally block
            let emitted = yield take(channel)
            yield put(authActions.authStateChange(emitted.user));
        }
    } finally {
        //
    }
}
