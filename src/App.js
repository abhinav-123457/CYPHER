import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './FIrebase/firebaseConfig';
import SignIn from './Signin/SignIn';
import Main from './Componets/main/Main';


const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Routes>
      <Route path="/" element={user ? <Navigate to="/main" /> : <SignIn />} />
      <Route path="/main" element={user ? <Main /> : <Navigate to="/" />} />
    </Routes>
  );
};

export default App;
