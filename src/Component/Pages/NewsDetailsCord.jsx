
import React, { } from 'react';

const NewsDetailsCord = ({newsCord}) => {
    const {title , thumbnail_url , details} = newsCord

    return (
        <div>
            <h1 className='text-2xl font-extrabold'>Dragon News</h1>
            <div>
                <img src={thumbnail_url} className='className=" h-80 object-cover rounded-md mb-3"' alt="" />
               <div className='pr-10 mt-5 space-y-3 '>
                 <h1 className='text-2xl font-bold'>{title}</h1>
                <p>{details}</p>
               </div>
           hello 
            </div>
        </div>
    );
};

export default NewsDetailsCord;