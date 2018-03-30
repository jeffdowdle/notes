import React from 'react';
import SignInContainer from './app/auth/containers/SignInContainer';

export default class App extends React.Component {
    render() {
        return (
            <div>
                The app
                <SignInContainer />
            </div>
        );
    }
}