
import { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { UsersContext } from '../context/CreateContext';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
    const navigate = useNavigate()
    const {singInEmail} = use(UsersContext)
    const [showPassword , setShowPassword] = useState()
    const formHandel = (e)=>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        singInEmail(email, password).then((result)=>{
            console.log(result.user),
            navigate('/')
        }).cash((error)=>{
            console.log(error)
        })
    }
    return (
        <div className='flex justify-center mt-10'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body space-y-7 p-4">
                    <h1 className="text-2xl font-bold">Login your account!</h1>
                    <form onSubmit={formHandel} className="fieldset space-y-5 ">
                       

                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />

                        <label className="label">Password</label>
                        <div className=' relative'>
                        <input type={showPassword ? 'password' : 'text'}
                         name='password'
                         className="input" placeholder="Password" />
                         <button type='button' onClick={()=>setShowPassword(!showPassword)} className=' absolute top-3 right-10'>{
                            showPassword ? <FaEye></FaEye> :<FaEyeSlash></FaEyeSlash>
                            }</button>
                        </div>
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </form>
                    <h1>Dont’t Have An Account ? <Link to={'/auth/registration'} className='text-rose-500'>Register</Link></h1>
                </div>
            </div>
        </div>
    );
};

export default Login;