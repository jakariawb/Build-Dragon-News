


import React, { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { UsersContext } from '../context/CreateContext';

const SocialLogin = () => {

    const {singeInGoog , gitHub} = useContext(UsersContext)
    const googleHandel = ()=>{

        singeInGoog().then((result)=>{
          const user = (result)
            user('Login successful done')
        }).catch((error)=>{
            alert(error.message)
        })
    }
    const gitSignIn = ()=>{
        gitHub().then((result)=>{
            alert (result)
        })
    }
    return (
        <div>
            <div className=''>
                <h1 className='font-extrabold mb-4 text-3xl'>Login With</h1>
                <div className=' space-y-3'>
                    <button onClick={googleHandel} className='flex items-center btn w-full btn-outline btn-secondary border-blue-400 '> <FaGoogle /> Login With Google</button>
                    <button onClick={gitSignIn} className='flex items-center btn w-full btn-outline btn-primary'> <FaGithub /> Login With Github</button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;