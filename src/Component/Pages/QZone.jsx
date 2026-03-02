


import React from 'react';
import swimming from '../../assets/swimming.png'
import playground from '../../assets/playground.png'
import class1 from '../../assets/class.png'
import Gb from '../../assets/bg.png'
const QZone = () => {
    return (
       
       <div>
        <h1 className='text-2xl font-extrabold mb-3'>Q Zoon</h1>
         <div className='bg-gray-300 justify-center grid w-80'>
            
            <img src={swimming} alt="" />
            <img src={class1} alt="" />
            <img src={playground} alt="" />
            {/* <img src={Gb} alt="" /> */}
        </div>
        <img className='mt-3' src={Gb} alt="" />
       </div>
    );
};

export default QZone;