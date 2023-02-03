import './GetUserArticles.css';
import { useState, useEffect } from 'react';
import backendUrl from '../../listsAndReusedConsts/backendUrl';

export default function GetUserArticles() {
  const [article, setArticle] = useState([]);
  const [articleAuthor, setArticleAuthor] = useState('');

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
        setArticleAuthor(result.user);
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
              <div className='article_title'>{article_title}</div>
              <p className='article_body'>{article_body}</p>
              <p className='article_creation_date'>
                {article_creation_date.toLocaleString().slice(0, 10)}
              </p>
              <p className='setArticleAuthor'>{articleAuthor}</p>
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
