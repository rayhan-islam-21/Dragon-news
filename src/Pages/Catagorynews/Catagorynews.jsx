import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../../Components/NewsCard/NewsCard";

const Catagorynews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [catanews,setNews] = useState([])

  useEffect(() => {
    if(id == "0"){
        setNews(data);
    }
    else if (id =="1") {
        const catagoryNews = data.filter((news) => news.others.is_today_pick === true);

        setNews(catagoryNews)
        console.log(catagoryNews);
    }
    else {
        const catagoryNews = data.filter((news) => news.category_id == id);

        setNews(catagoryNews)
        console.log(catagoryNews);
    }
  }, [data, id]);
  return <div>
    <h1 className="text-xl px-3 font-bold"><span className="text-red-700">Dragon</span> News Home</h1>
    <div className="grid grid-cols-1 gap-16 p-3">
        {
            catanews.map(news=><NewsCard key={news.id} news={news} ></NewsCard>)
        }
    </div>
  </div>;
};

export default Catagorynews;
