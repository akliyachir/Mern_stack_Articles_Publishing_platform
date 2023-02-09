import './GetUserFullArticleTemplate.css';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import backendUrl from '../../listsAndReusedConsts/backendUrl';
import { FaEdit, FaRegTrashAlt } from 'react-icons/fa';
import parser from 'html-react-parser';

export default function GetUserFullArticleTemplate() {
  const navigate = useNavigate();

  const { user_article_id } = useParams();
  const [userArticleContent, setUserArticleContent] = useState({});
  const [isLoading, setisLoading] = useState(true);
  const [articleDeleted, setarticleDeleted] = useState(false);

  useEffect(() => {
    const userLocalStorage = window.localStorage.getItem('user');
    const { token } = JSON.parse(userLocalStorage);
    const fetchTheArticle = async () => {
      setisLoading(true);
      console.log(`${backendUrl}user_article/${user_article_id}`);
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
          setisLoading(false);
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

  // -- handle handleOnClickDeleteArticle

  async function handleOnClickDeleteArticle() {
    const userLocalStorage = window.localStorage.getItem('user');
    const { token } = JSON.parse(userLocalStorage);

    try {
      const response = await fetch(
        `${backendUrl}user_article/${user_article_id}`,
        {
          method: 'DELETE',
          headers: {
            authorization: JSON.stringify(`Bearer ${token}`),
          },
        }
      );
      const result = await response.json();

      //-- ok
      if (response.ok) {
        console.log('ok');
        console.log(result.message);
        setarticleDeleted(true);
        setTimeout(() => {
          navigate('/user_articles');
        }, 2000);
      }

      //-- not ok
      if (!response.ok) {
        console.log('not ok');
        console.log(result.message);
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  const {
    article_image_url,
    article_title,
    article_body,
    article_creation_date,
    article_id,
    article_is_public,
  } = userArticleContent;

  return isLoading ? (
    <article className='GetUserFullArticleTemplate'>
      <div className='GetUserFullArticleTemplateContent'>
        <div className='isLoading'>Loading...</div>
      </div>
    </article>
  ) : articleDeleted ? (
    <article className='GetUserFullArticleTemplate'>
      <div className='GetUserFullArticleTemplateContent'>
        <div className='isLoading'>
          <p>The article</p>
          <h4>{article_title}</h4>
          <p>has been</p>
          <h3>deleted</h3>
        </div>
      </div>
    </article>
  ) : (
    <article className='GetUserFullArticleTemplate'>
      <div className='GetUserFullArticleTemplateContent'>
        <div
          className='article_image_url'
          style={{ backgroundImage: `url(${article_image_url})` }}
        ></div>
        <div className='article_title'>{article_title}</div>
        <p className='article_body'>{parser(article_body)}</p>
        <p className='article_creation_date'>
          {article_creation_date.slice(0, 10)}
        </p>
        <div className='pivetDeletionAndModifyContainer'>
          <div
            className='deleteIcon'
            onClick={() => {
              handleOnClickDeleteArticle();
            }}
          >
            <FaRegTrashAlt />
          </div>
          <div className='deleteIcon'>
            <FaEdit />
          </div>
          <p className='article_is_public'>
            {article_is_public ? 'Privet' : 'Public'}
          </p>
        </div>
      </div>
    </article>
  );
}

/* 
article_image_url
article_title
article_body
article_creation_date
article_id
article_is_public
*/
