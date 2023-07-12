// components/NewsItem.js
import React from 'react';

function NewsItem({ title, description, url, imageUrl }) {
  return (
    <div className="news-item">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        Read More
      </a>
    </div>
  );
}

export default NewsItem;
