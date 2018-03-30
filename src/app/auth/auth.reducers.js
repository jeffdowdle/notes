import { SIGNIN_REQUESTED, SIGNIN_SUCCEEDED, SIGNIN_FAILED, AUTH_STATE_CHANGE } from './auth.constants';

const initialState = {
    currentUser: null,
    signInBusy: false,
    signInError: null,
}

export const auth = (state = initialState, action) => {
    switch (action.type) {
        case SIGNIN_REQUESTED:
            return {
                ...state,
                signInBusy: true,
                signInError: null,
            };
        case SIGNIN_SUCCEEDED:
            return {
                ...state,
                signInBusy: false,
            };
        case SIGNIN_FAILED:
            return {
                ...state,
                signInBusy: false,
                signInError: action.error,
            };
        case AUTH_STATE_CHANGE:
            return {
                ...state,
                currentUser: action.user,
            };
        default:
            return state
    }
};