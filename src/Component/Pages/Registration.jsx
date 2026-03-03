

import React, { use } from 'react';
import { Link, Navigate, useNavigate } from 'react-router';
import { UsersContext } from '../context/CreateContext';

const Registration = () => {
    const navigate = useNavigate()
  const {createUsersAuth , setUsers} = use(UsersContext)

    const handelUserRegister = (e)=>{
        e.preventDefault()
        const userName = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(userName)

        createUsersAuth(email , password).then((result)=>{
            console.log(result.user)
            
            setUsers(result.user)
            navigate('/')
            
        }).catch(error=>{
            console.log(error)
        })
    }
    return (
        <div>
            <div className='flex justify-center mt-10'>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body space-y-5">
                        <h1 className="text-2xl font-bold">Register your account</h1>
                        <form onSubmit={handelUserRegister} className="fieldset">

                            <label className="label">Name</label>
                            <input type="text" name='name' className="input" placeholder="name" />

                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" />
                            <label className="label">
                                <input type="checkbox" defaultChecked className="checkbox" />
                                Remember me
                            </label>
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Register</button>
                        </form>
                        <h1>Allready Have An Account ? <Link to={'/auth/login'} className='text-rose-500'>Login</Link></h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;