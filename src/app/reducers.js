import {combineReducers} from 'redux';
import * as auth from './auth/auth.reducers';

export default combineReducers({
    ...auth,
});