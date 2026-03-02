


import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCord from './NewsCord';

const CategoryNews = () => {
    const { id } = useParams()
    const newsData = useLoaderData()
    const [categoryNews, setCategoryNews] = useState([])

    useEffect(() => {

        if (id == '0') {
            setCategoryNews(newsData)
            return
        }
        else if (id == '1') {
            const filterNews = newsData.filter(news => news.others.is_today_pick == true)
            setCategoryNews(filterNews)
        }
        else {
            const newNews = newsData.filter(news => news.category_id == id)
            console.log(newNews)

            setCategoryNews(newNews)
        }


    }, [newsData, id])

    return (
        <div>
            <h1>{categoryNews.length} nwse Found</h1>
            {
                categoryNews.map(news=><NewsCord key={news.id} news={news}></NewsCord>)
            }
        </div>
    );
};

export default CategoryNews;