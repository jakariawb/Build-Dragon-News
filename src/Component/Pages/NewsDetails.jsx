
import React, { use, useEffect, useState } from 'react';
import Header from '../Header';
import { useLoaderData, useParams } from 'react-router';
import RightAside from './RightAside';
import NewsDetailsCord from './NewsDetailsCord';
import { UsersContext } from '../context/CreateContext';

const NewsDetails = () => {
  const useLoader = useLoaderData()
  const {id} = useParams()
  const [newsCord , setNews] = useState({})
  const {users} = use(UsersContext)

  useEffect(()=>{
     const user = useLoader.find(single=>single.id==id);
     setNews(user)
  },[useLoader , id])
  
    return (
        <div>
           
           <div className='grid justify-center items-center'>
              <Header></Header>
           </div>
         
            <div className='grid lg:grid-cols-12  w-11/12 mx-auto mt-10 gap-5 md:grid-cols-2 '>
                <main className={`${users ? 'col-span-12' : 'col-span-9'}`}>
                    <NewsDetailsCord newsCord={newsCord}></NewsDetailsCord>
                </main>
               {
                !users &&  <aside className='col-span-3'>
                <RightAside ></RightAside>
                </aside>
               }
            </div>
        </div>
    );
};

export default NewsDetails;