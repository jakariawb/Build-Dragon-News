
import React, {  useEffect, useState } from 'react';
import { UsersContext } from './CreateContext';
import { auth } from '../autn/Auth';
import { createUserWithEmailAndPassword, GithubAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile,} from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";



const ContextProvider = ({ children }) => {
 const [users , setUsers] = useState(null);
 const [loader , setLoader] = useState(true)

 const provider = new GoogleAuthProvider();
 const gitProvider = new GithubAuthProvider();
 
  const createUsersAuth = (email, password)=>{
    return createUserWithEmailAndPassword(auth , email , password)
  }

  const singInEmail = (email , password)=>{
    return signInWithEmailAndPassword(auth,email,password)
  }
  const userSingOut = ()=>{
     return signOut(auth)
  }
  const singeInGoog = ()=>{
    return signInWithPopup(auth , provider)
  }
  const gitHub = () =>{
    return signInWithPopup(auth , gitProvider)
  }
  const updateProfileAuth = profile =>{
    return updateProfile(auth .currentUser , profile)
  }
  const emailVerification = ()=>{
    return sendEmailVerification(auth . currentUser)
  }
  const forgatPassword = (email)=>{
    return sendPasswordResetEmail(auth , email)
  }
 useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth , (currentUsers)=>{
        // setUsers(currentUsers)
        setUsers(currentUsers)
        setLoader(false)
    })
    return (()=>{
        unSubscribe()
    })
 },[])
    const email = {
        createUsersAuth,
        users,
        setUsers,
        singInEmail,
        userSingOut,
        singeInGoog,
        gitHub,
        loader,
        setLoader,
        updateProfileAuth,
        emailVerification,      
        forgatPassword 
    }
    return (
        <div>
            <UsersContext value={email}>
                {children}
            </UsersContext>
        </div>
    );
};

export default ContextProvider;