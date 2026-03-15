
import { use, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { UsersContext } from '../context/CreateContext';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
    const [usersError, setUsersError] = useState('')
    const navigate = useNavigate()
    const { singInEmail, forgatPassword} = use(UsersContext)
    const [showPassword, setShowPassword] = useState()
    const emailRef = useRef()
    const location = useLocation()
    // console.log(location)
    const formHandel = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        setUsersError('')
        singInEmail(email, password).then(() => {
           
                navigate(`${location.state ? location.state : '/'}`)
                alert('your successFul Done')
        }).catch((error) => {
           setUsersError(error.message)
           
        })
    }
  const handelResetPassword = ()=>{
      
     const email = emailRef.current.value

    if(!email){
        setUsersError("Please enter your email first")
        return
    }

    forgatPassword(email)
    .then(()=>{
        console.log('reset email')
        alert("Password reset email sent. Please check your inbox.")
    })
    .catch((error)=>{
        setUsersError(error.message)
    })


  }
    return (
        <div className='flex justify-center mt-10'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body space-y-7 p-4">
                    <h1 className="text-2xl font-bold">Login your account!</h1>
                    <form onSubmit={formHandel} className="fieldset space-y-5 ">


                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" ref={emailRef} required placeholder="Email" />

                        <label className="label">Password</label>
                        <div className=' relative'>
                            <input type={showPassword ? 'text' : 'password'}
                                name='password'
                                // required
                                className="input" placeholder="Password" />
                            <button type='button' onClick={() => setShowPassword(!showPassword)} className=' absolute top-3 right-10'>{
                                showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                            }</button>
                        </div>
                        <div onClick={handelResetPassword}>
                            
                            <a className="link link-hover">Forgot password?</a>

                        </div>
                         {
                               usersError && <p className='text-red-400'>{usersError}</p>
                            }
                        <button className="btn btn-neutral mt-4">Login</button>
                         <h1>Dont’t Have An Account ? <Link to={'/auth/registration'} className='text-rose-500'>Register</Link></h1>
                    </form>
                   
                </div>
            </div>
        </div>
    );
};

export default Login;