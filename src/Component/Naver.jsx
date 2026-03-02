import React from 'react';
import { NavLink } from 'react-router';
import user from '../assets/user.png'
import Marquee from 'react-fast-marquee';
const Naver = () => {
    return (
        <div className=''>
            <div className='flex justify-between mt-10'>
                <div>
                    {/* <Marquee pauseOnHover={true} speed={60}>
                        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, hic?</h1>
                    </Marquee> */}
                </div>

                <div className=' space-x-7'>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/career">Career</NavLink>
                </div>

                <div className='flex gap-4'>
                    <img src={user} alt="" />
                    <button className='btn bg-primary text-base-200'>Login</button>
                </div>
            </div>
        </div>
    );
};

export default Naver;