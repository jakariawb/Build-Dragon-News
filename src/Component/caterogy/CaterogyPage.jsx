

import React, { use, useState } from 'react';
import { NavLink } from 'react-router-dom'; 

import { FaBars } from "react-icons/fa";



const promise = fetch('/categories.json').then(res => res.json())
const CaterogyPage = () => {
  const [nav , setNave] = useState(false)
  
    const data = use(promise)
    
    const naveHandel = ()=>{
        setNave(!nav)
    }
 
    return (
        <div className='h-10'>
            <button  onClick={naveHandel} className='lg:hidden'>
                <FaBars></FaBars>
            </button>
            <div className={`lg:block ${nav ? 'block' : 'hidden'} absolute lg:static bg-white w-60 z-10 shadow lg:shadow-none`}>
            <h1>All categories ({data.length})</h1>
           
            <div onClick={()=>setNave(false)} className={`grid lg:italic md:w-60 gap-2`}>
                {
                    data.map((category) => <NavLink key={category.id} className={'lg:hover:bg-gray-100 lg:text-black text-white lg:bg-white lg:py-2 lg:px-3 bg-secondary p-4 font-medium  text-center'}
                        to={`categories/${category.id}`}>

                        {category.name}
                    </NavLink>)
                }
            </div>
        </div>

        </div>
    )
};

export default CaterogyPage;