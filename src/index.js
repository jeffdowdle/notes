import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './app/reducers';

import createSagaMiddleware from 'redux-saga'
import rootSaga from './app/sagas'

import * as firebase from 'firebase';
import firebaseConfig from './config/firebase.config';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

firebase.initializeApp(firebaseConfig);

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware),
    ),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

registerServiceWorker();
