

import React, { use, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router';
import { UsersContext } from '../context/CreateContext';


const Registration = () => {

    const navigate = useNavigate()
    const { createUsersAuth, setUsers, updateProfileAuth, users, emailVerification } = use(UsersContext)
    const [nameError, setNameError] = useState('')
    const [error, setError] = useState('')
    const [terms, setTerms] = useState(false)
    const [success , setSuccess] = useState('')
    const handelUserRegister = (e) => {
        e.preventDefault()
        const check = e.target.terms.checked
        const photo = e.target.photo.value;
        const name = e.target.name.value;

        if (!check) {
            setTerms("Please accept the terms")
            return
        }
        if (name.length < 5) {
            setNameError('name is not dfind')
            return
        }

        const userName = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        setError('')
        setTerms(false)
        setNameError('')

        createUsersAuth(email, password).then((result) => {
            const user = (result.user)
            if(result.user.emailVerified){
                alert('please verify your Email address ')
            }else{
                setSuccess(true)
            }
            return emailVerification().then(() => {
                console.log('verification emil sed')
                return updateProfileAuth({ displayName: userName, photoURL: photo })
            })
                .then(() => {
                    setUsers({ ...user, displayName: userName, photoURL: photo })
                    navigate('/')
                }).catch(() => {
                    setUsers(users)
                })
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

                            {
                                nameError && <p className='text-red-400'>{nameError}</p>
                            }

                            <label className="label">Photo</label>
                            <input type="text" name='photo' className="input" placeholder="photo URL" />

                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" />

                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" />

                            <label className="label">
                                <input type="checkbox" name="terms" defaultChecked className="checkbox" />
                                Remember me
                            </label>
                            {
                                terms && <p>{terms}</p>
                            }
                            <div><a className="link link-hover">Forgot password?</a></div>
                            {
                                success && <p>success ful done</p>
                            }
                            <div>
                                {
                                    error && <p className='text-green-400'>{error}</p>
                                }
                            </div>
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