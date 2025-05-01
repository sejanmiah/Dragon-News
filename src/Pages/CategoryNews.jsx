import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../component/HomeLayout/NewsCard';

const CategoryNews = () => {
    const {id} = useParams();
    const data = useLoaderData()
    // console.log(id, data);
    // console.log(id);
    const [categoryNews,setCategoryNews] = useState([])

    useEffect(()=> {
        if(id=="0") {
            setCategoryNews(data);
            return
        }else if (id == "1") {
            const filterNews = data.filter((news) => news.others.is_today_pick == true);
            console.log(filterNews);
            setCategoryNews(filterNews)
        }else{
            const filterNews = data.filter((news) => news.category_id == id);
            console.log(filterNews);
            setCategoryNews(filterNews)
        }
    },[data,id])
    return (
        <div>
            <h1 className='font-bold'>Total News: <span className='text-secondary'>{categoryNews.length}</span> News Found</h1>
            <div className='grid grid-cols-1 gap-5 mt-5'>
                {
                    categoryNews.map((news) => <NewsCard key={news.id} news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;