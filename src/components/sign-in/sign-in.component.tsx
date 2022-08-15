import React, { FormEvent, useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

interface SignInProps {
  onClick: () => void;
  onClose: () => void;
  hidden?: boolean;
}

export const SignIn = ({ onClick, onClose, hidden = false }: SignInProps) => {

  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '' 
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setUserCredentials({ email: '', password: '' });

    } catch (error) {
        console.log(error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { value, name } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value })
  };

  return (
    <div className={`sign-in ${hidden ? 'hidden' : ''}`}>
      <div className='exit-button-container'>
        <h3>Already registered?</h3>
        <div className='exit-button'>
          <span onClick={onClose}>&#x2716;</span>
        </div>
      </div>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput 
            name="email" 
            type="email" 
            value={email}
            onChange={handleChange}
            label="Email address" 
            required
        />
        <FormInput  
            name="password" 
            type="password" 
            value={password}
            onChange={handleChange}  
            label="Password"
            required 
        />
        <div className='buttons'>
            <CustomButton type="submit"> Sign In </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign in with Google </CustomButton>
            <CustomButton type="button" inverted onClick={onClick}>Register</CustomButton>
        </div>
      </form>
    </div>
  );
}