import React from 'react';

export default class SignIn extends React.Component {
    static get defaultProps() {
        return {
            onSubmit: () => {},
        }
    }

    state = {
        email: '',
        password: '',
    }

    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value,
        });
    }

    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit({
            email: this.state.email,
            password: this.state.password,
        });
    }
    
    render() {
        const {
            isSignedIn,
            errorMessage,
            isBusy,
        } = this.props;

        if (isSignedIn) {
            return <div>You are signed in already</div>;
        } else {
            return (
                <form onSubmit={this.handleSubmit}>
                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    
                    <label>
                        <span>Email</span>
                        <input type="text" onChange={this.handleEmailChange} />
                    </label>
    
                    <label>
                        <span>Password</span>
                        <input type="password" onChange={this.handlePasswordChange} />
                    </label>
    
                    <button type="submit" disabled={isBusy}>Sign in</button>
                </form>
            );
        }
    }
}