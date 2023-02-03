import './GetUserArticles.css';
import { useState, useEffect } from 'react';
import backendUrl from '../../listsAndReusedConsts/backendUrl';

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

      if (!response.ok) {
        console.log('not ok');
        console.error(result.message);
      }

      if (response.ok) {
        console.log('ok');
        console.log(result.message);
        setArticle(result.message);
      }
    };

    getArticles();
  }, []);

  return (
    <div className='GetUserArticles'>
      <div className='GetUserArticlesContainer'></div>
    </div>
  );
}
