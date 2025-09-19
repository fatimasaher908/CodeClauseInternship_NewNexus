import React, {useEffect, useState} from 'react';
import axios from 'axios';
import CategorySelector from './CategorySelector';
import NewsList from './NewsList';
import './Style.css';

const API_KEY = 'e12f12fe5e3d4d54ba78459deb3e867b';

function App() {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState('technology');

  useEffect(() =>{
    const fetchNews = async () => {
      try{
        const res = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`
        );
        setArticles(res.data.articles);

      } catch(err){
        console.error('Error fetching news', err);
      }
    };

    fetchNews();
  }, [category]);

  return (
    <div id='container'>
      <h1 id='main-head'>NewsNexus</h1>
      <div id="category-selector">
        <CategorySelector selected={category} onChange={setCategory} />
      </div>
      <NewsList articles={articles} />
    </div>
  );
}

export default App;
