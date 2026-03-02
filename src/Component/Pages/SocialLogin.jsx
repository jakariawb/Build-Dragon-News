


import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <div>
            <div>
                <h1 className='font-extrabold mb-4 text-3xl'>Login With</h1>
                <div className=' space-y-3'>
                    <button className='flex items-center btn w-full btn-outline btn-secondary border-blue-400 '> <FaGoogle /> Login With Google</button>
                    <button className='flex items-center btn w-full btn-outline btn-primary'> <FaGithub /> Login With Github</button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;