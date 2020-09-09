import _ from 'lodash';
import React, { useCallback, useEffect, useState } from 'react';
import config from '../../../env.json';

import '../dashboard.css';

const newsApiUrl = `http://newsapi.org/v2/top-headlines?country=de&limit=10&category=business&apiKey=${config.newsApiKey}`;

export const NewsItems = () => {
  const [articleData, setArticleData] = useState([]);
  const fetchData = useCallback(async () => {
    const res = await fetch(newsApiUrl, {
      mode: 'cors',
      method: 'GET',
      crossDomain: true,
    });
    const data = await res.json();
    setArticleData(data.articles);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="componentWrapper">
      { articleData.map((articles, index) => (
        <div key={`article-${index}`} className="items">
          <p>
            <strong>Author:&#160;</strong>
            {articles.author ? articles.author : 'No author specified'}
          </p>
          <p>
            <strong>Title:&#160;</strong>
            {articles.title ? articles.title : 'No title specified'}
          </p>
          <p>
            <strong>Description:&#160;</strong>
            {articles.description ? articles.description : 'No description specified'}
          </p>
          <p>
            <strong>Url:&#160;</strong>
            <a href={articles.url}>{articles.url}</a>
          </p>
        </div>
      ))}
    </div>
  );
};
