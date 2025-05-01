import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

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
            <h1>Total News: {categoryNews.length} News Found</h1>
        </div>
    );
};

export default CategoryNews;