/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null);
const auth = getAuth(app);
const Googleprovider = new GoogleAuthProvider();



const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [reload, setReload] = useState(false)

  const createUser = (email, password) => {
    setIsLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const updateUser = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, { displayName, photoURL })
  }

  const signIn = (email, password) => {
    setIsLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  const signWithGoogle = () => {
    setIsLoading(true)
    return signInWithPopup(auth, Googleprovider)
  }

  const logOut = () => {
    setIsLoading(true)
    return signOut(auth)
  }



  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedonUser) => {
      // console.log(loggedonUser);
      setUser(loggedonUser);
      setIsLoading(false)
    })
    return () => {
      unsubscribe()
    };
  }, [reload])




  const authInfo = {
    user,
    isLoading,
    createUser,
    signIn,
    logOut,
    signWithGoogle,
    updateUser,
    setUser,
    setReload
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;