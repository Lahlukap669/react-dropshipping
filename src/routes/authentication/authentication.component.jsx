import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import './authentication.styles.scss';

const Auth = () => {
    
    return (
        <div className='authentication-container'>
            <SignInForm />
            <SignUpForm />
        </div>
    );
}
export default Auth;