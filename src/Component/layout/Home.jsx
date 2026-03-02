
import React from 'react';
import { Navigate } from 'react-router';



const Home = () => {
    return (
        <div>
          <Navigate to={'/categories/3'}></Navigate>
        </div>
    );
};

export default Home;