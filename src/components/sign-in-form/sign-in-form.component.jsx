import { useState } from 'react';
import { signInWithGooglePopup, SignInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  // Handle changes to form inputs
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        await SignInAuthUserWithEmailAndPassword(email, password);
        setFormFields(defaultFormFields);
    } catch (error) {
        switch (error.code) {
            case 'auth/user-not-found':
                alert('User not found');
                break;
            case 'auth/invalid-credential':
                alert('Invalid credentials');
                break;
            default:
                console.error('Error signing in:', error.message);
        }
    }
  };

  return (
    <div className='sign-up-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}> {/* Use handleSubmit directly */}

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className='buttons-container'>
          <Button buttonType='inverted' type="submit">Sign In</Button>
          <Button buttonType='google' onClick={signInWithGoogle}>Google Sign In</Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;