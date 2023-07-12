import React, { useState, useEffect } from 'react';
import { fetchNews } from '../api';
import NewsItem from './NewsItem';

function NewsList() {
  const [news, setNews] = useState([]);

  const fetchNewsData = async () => {
    const data = await fetchNews();
    setNews(data);
    localStorage.setItem('newsData', JSON.stringify(data));
  };

  useEffect(() => {
    const storedNewsData = localStorage.getItem('newsData');

    if (storedNewsData) {
      setNews(JSON.parse(storedNewsData));
    } else {
      fetchNewsData();
    }

    const interval = setInterval(fetchNewsData, 60000); // Fetch news every 60 seconds (adjust as needed)

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="news-list">
      {news.map((item) => (
        <NewsItem
          key={item.url}
          title={item.title}
          description={item.description}
          url={item.url}
          imageUrl={item.urlToImage}
        />
      ))}
    </div>
  );
}

export default NewsList;
