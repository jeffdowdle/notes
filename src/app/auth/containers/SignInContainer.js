import { connect } from 'react-redux';
import SignIn from '../components/SignIn';
import {signIn} from '../auth.actions';

const mapStateToProps = (state) => {
    return {
        isSignedIn: !!state.auth.currentUser,
        isBusy: state.auth.signInBusy ? state.auth.signInBusy.message : null,
        errorMessage: state.auth.signInError ? state.auth.signInError.message : null,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: values => dispatch(signIn(values)),
    };
};

const SignInContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignIn)
 
export default SignInContainer

