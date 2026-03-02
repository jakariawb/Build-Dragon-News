

import React, { use } from 'react';
import { NavLink } from 'react-router-dom'; 



const promise = fetch('/categories.json').then(res => res.json())
const CaterogyPage = () => {

    const data = use(promise)
    

    return (
        <div>
            <h1>All categories ({data.length})</h1>
            <div className='grid gap-2'>
                {
                    data.map((category) => <NavLink key={category.id} className={'hover:bg-gray-100 py-2 px-3 font-medium italic text-center'}
                        to={`categories/${category.id}`}>

                        {category.name}
                    </NavLink>)
                }
            </div>
        </div>

    )
};

export default CaterogyPage;