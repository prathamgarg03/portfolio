import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import Microlink from '@microlink/react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const NewsComponent = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=startup&apiKey=36146f27127d45dd94a4e4e484eca95d&pageSize=5`);
        setNews(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Latest News Related to Startups</h2>
      <Slider {...settings}>
        {news.map((article, index) => (
          <div key={index}>
            <Microlink url={article.url} className="rounded-xl shadow-lg p-4" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewsComponent;
