import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SignIn } from '../../components/sign-in';
import SignUp from '../../components/sign-up/sign-up.component';

import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUpPage = () => {
  const [SignUpHidden, setSignUpHidden] = useState<boolean>(true);

  const closePage = () => {
    const navigate = useNavigate();
    navigate('/');
  }

  return(
    <div className='sign-in-and-sign-up'>
      <SignIn onClick={() => setSignUpHidden(false)} onClose={() => closePage()} />
      <SignUp 
        hidden={SignUpHidden} 
        //onClick={() => setSignUpHidden(true)} 
        onClose={() => closePage()} 
      />
    </div>
)};

export default SignInAndSignUpPage;