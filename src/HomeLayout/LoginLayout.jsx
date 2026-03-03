

import React from 'react';
import Login from '../Component/Pages/Login';
import Registration from '../Component/Pages/Registration';
import Naver from '../Component/Naver';
import { Outlet } from 'react-router';

const LoginLayout = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Naver></Naver>
          <main>
            <Outlet></Outlet>
          </main>
           
        </div>
    );
};

export default LoginLayout;