

import React, { use } from 'react';
import { UsersContext } from '../context/CreateContext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Pages/Loading';

const PrivetRoute = ({children}) => {
    const {users , loader} = use(UsersContext)
   const location = useLocation()
  
    if(loader){
        return <Loading></Loading>
    }
   if(users && users.email){
    return children
   }else{
   return <Navigate state={location.pathname}  to='/auth/login'></Navigate>
   }
  
};

export default PrivetRoute;