
import { NavLink } from 'react-router';
import usersP from '../assets/user.png'
import { use } from 'react';
import { UsersContext } from './context/CreateContext';

const Naver = () => {
        
    const {users , userSingOut} = use(UsersContext)
    const signOutHandel = ()=>{
      userSingOut().then(()=>{
        console.log('sign Out success full done')
      })
    }
    return (
        <div className=''>
            <div className='flex justify-between mt-10'>
                <div>
                   <p>{users?.email}</p>
                </div>

                <div className=' space-x-7'>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/career">Career</NavLink>
                </div>

                <div className='flex gap-4'>
                    <img src={usersP} alt="" />
                    {
                        users?  <NavLink to={'/auth/registration'} onClick={signOutHandel} className='btn bg-primary text-base-200'>SignOut</NavLink> :
                        <NavLink to={'/auth/registration'} className='btn bg-primary text-base-200'>Login</NavLink>
                       
                    }
                </div>
            </div>
        </div>
    );
};

export default Naver;