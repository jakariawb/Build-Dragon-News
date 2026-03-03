
import React, { useEffect, useState } from 'react';
import { UsersContext } from './CreateContext';
import { auth } from '../autn/Auth';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut,} from 'firebase/auth';

const ContextProvider = ({ children }) => {
 const [users , setUsers] = useState(null)
 
  const createUsersAuth = (email, password)=>{
    return createUserWithEmailAndPassword(auth , email , password)
  }

  const singInEmail = (email , password)=>{
    return signInWithEmailAndPassword(auth,email,password)
  }
  const userSingOut = ()=>{
     return signOut(auth)
  }
 useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth , (currentUsers)=>{
        // setUsers(currentUsers)
        setUsers(currentUsers , 'hello')
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
        userSingOut
       
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