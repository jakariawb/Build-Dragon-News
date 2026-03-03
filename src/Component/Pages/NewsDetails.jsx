
import React, { useEffect, useState } from 'react';
import Header from '../Header';
import { useLoaderData, useParams } from 'react-router';
import RightAside from './RightAside';
import NewsDetailsCord from './NewsDetailsCord';

const NewsDetails = () => {
  const useLoader = useLoaderData()
  const {id} = useParams()
  const [newsCord , setNews] = useState({})

  useEffect(()=>{
     const user = useLoader.find(single=>single.id==id);
     setNews(user)
  },[useLoader , id])
  
    return (
        <div>
            <Header></Header>
            <div className='grid grid-cols-12  w-11/12 mx-auto mt-10'>
                <main className='col-span-8'>
                    <NewsDetailsCord newsCord={newsCord}></NewsDetailsCord>
                </main>
                <aside className='col-span-4'>
                <RightAside ></RightAside>
                </aside>
            </div>
        </div>
    );
};

export default NewsDetails;