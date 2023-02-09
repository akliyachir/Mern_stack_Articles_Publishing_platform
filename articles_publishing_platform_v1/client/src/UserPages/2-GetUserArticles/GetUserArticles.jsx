import './GetUserArticles.css';
import { useState, useEffect } from 'react';
import backendUrl from '../../listsAndReusedConsts/backendUrl';
import UserArticleCard from '../../UserComponents/3-UserArticleCard/UserArticleCard';

export default function GetUserArticles() {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const user = globalThis.localStorage.getItem('user');
      const { token } = JSON.parse(user);
      const response = await fetch(backendUrl + 'user_article', {
        headers: {
          'Content-Type': 'application/json',
          authorization: JSON.stringify(`Bearer ${token}`),
        },
      });

      const result = await response.json();
      // -- is not ok
      if (!response.ok) {
        console.log('not ok');
        console.error(result.message);
      }

      // -- ok
      if (response.ok) {
        console.log('ok');
        setArticle(result.message);
      }
    };

    getArticles();
  }, []);

  return (
    <div className='GetUserArticles'>
      <div className='GetUserArticlesContainer'>
        {article.map((item) => {
          return <UserArticleCard key={item.article_id} item={item} />;
        })}
      </div>
    </div>
  );
}
