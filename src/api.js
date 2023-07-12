// api.js
import axios from 'axios';

const API_KEY = '6a786bc59c92415a9689a5e5f6409ea9'; // Replace with your NewsAPI key

export const fetchNews = async () => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
    );
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};
