
import React, { use } from 'react';

import SocialLogin from './SocialLogin';
import FindUs from './FindUs';
import QZone from './QZone';
import { UsersContext } from '../context/CreateContext';
const RightAside = () => {
    const {users} = use(UsersContext)
    if(users){
       return null;
    }
    
    return (
        <div className=' space-y-19  lg:grid w-auto'>
           <SocialLogin></SocialLogin>
           <FindUs></FindUs>

           <QZone></QZone>
        </div>
    );
};

export default RightAside;