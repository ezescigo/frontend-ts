import React, { FormEvent, useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

interface SignUpProps {
  onClose: () => void;
  hidden?: boolean;
}

const SignUp = ({ hidden, onClose }: SignUpProps) => {
  const [newUserCredentials, setNewUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { displayName, email, password, confirmPassword } = newUserCredentials; 

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email, 
        password
      );

      await createUserProfileDocument(user, { displayName });

      setNewUserCredentials({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
        console.error(error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = event.target;

    setNewUserCredentials({ ...newUserCredentials, [name]: value});
  }

  return(
    <div className={`sign-up ${hidden ? 'hidden' : ''}`}>
      <div className='exit-button-container'>
        <h3>Create a new account</h3>
        <div className='exit-button'>
          <span onClick={onClose}>&#x2716;</span>
        </div>
      </div>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={handleChange}
            label='Display Name'
            required
        />
        <FormInput
            type='email'
            name='email'
            value={email}
            onChange={handleChange}
            label='Email'
            required
        />
        <FormInput
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
            label='Password'
            required
        />
        <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={handleChange}
            label='Confirm Password'
            required
        />
        <CustomButton type='submit'>Sign Up</CustomButton> 
      </form>
    </div>
  );
};

export default SignUp;