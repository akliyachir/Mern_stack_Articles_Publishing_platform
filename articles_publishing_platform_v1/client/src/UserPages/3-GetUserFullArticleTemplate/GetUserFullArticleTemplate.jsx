import './GetUserFullArticleTemplate.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import backendUrl from '../../listsAndReusedConsts/backendUrl';

export default function GetUserFullArticleTemplate() {
  const { user_article_id } = useParams();
  const [userArticleContent, setUserArticleContent] = useState(null);

  useEffect(() => {
    const userLocalStorage = window.localStorage.getItem('user');
    const { token } = JSON.parse(userLocalStorage);
    const fetchTheArticle = async () => {
      try {
        const response = await fetch(
          `${backendUrl}user_article/${user_article_id}`,
          {
            headers: {
              authorization: JSON.stringify(`Bearer ${token}`),
            },
          }
        );
        const result = await response.json();

        //-- ok
        if (response.ok) {
          console.log('ok');
          setUserArticleContent(result.message);
        }

        //-- not ok
        if (!response.ok) {
          console.log('not ok');
          console.log(result.message);
        }
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchTheArticle();
  }, []);

  const {
    article_body,
    article_creation_date,
    article_id,
    article_image_url,
    article_is_public,
    article_title,
  } = userArticleContent;

  return (
    <article className='GetUserFullArticleTemplate'>
      <div className='GetUserFullArticleTemplateContent'>
        <div
          className='article_image_url'
          style={{ backgroundImage: article_image_url }}
        ></div>
      </div>
    </article>
  );
}

/* 
article_body
article_creation_date
article_id
article_image_url
article_is_public
article_title
*/
