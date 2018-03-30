import { SIGNIN_REQUESTED, SIGNIN_SUCCEEDED, SIGNIN_FAILED, AUTH_STATE_CHANGE } from './auth.constants';

export const signIn = ({email, password}) => {
    return {
        type: SIGNIN_REQUESTED,
        email,
        password,
    }
}

export const signInSucceeded = (data) => {
    return {
        type: SIGNIN_SUCCEEDED,
        data,
    }
}

export const signInFailed = (error) => {
    return {
        type: SIGNIN_FAILED,
        error,
    }
}

export const authStateChange = (user) => {
    return {
        type: AUTH_STATE_CHANGE,
        user,
    }
}