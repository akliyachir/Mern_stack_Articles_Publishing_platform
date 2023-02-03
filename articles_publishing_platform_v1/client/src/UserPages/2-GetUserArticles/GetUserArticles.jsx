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
        setArticle(result.message);
      }
    };

    getArticles();
  }, []);

  return (
    <div className='GetUserArticles'>
      <div className='GetUserArticlesContainer'>
        {article.map((item) => {
          const {
            article_title,
            article_image_url,
            article_body,
            article_id,
            article_creation_date,
          } = item;
          return (
            <article key={article_id} className='userArticleCard'>
              <img
                src={article_image_url}
                alt={article_image_url}
                className='article_image_url'
              />
              <div className='article_title'></div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

/* 

article_title
article_image_url
article_body
article_id
article_creation_date
*/
