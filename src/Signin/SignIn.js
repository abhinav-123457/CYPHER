import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../FIrebase/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import Features from '../Features/Features';
import './SignIn.css';

const SignIn = () => {
  const navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        navigate('/Main');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="signin-page">
      <header className="signin-header">
        <h1>Welcome to Cypher</h1>
        <p>Your personal coding assistant</p>
      </header>
      <Features />
      <button className="signin-button" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </div>
  );
};

export default SignIn;
