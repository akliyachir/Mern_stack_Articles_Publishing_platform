import './UserArticleCard.css';
import { useParams, NavLink } from 'react-router-dom';

export default function UserArticleCard({ item }) {
  const {
    article_title,
    article_image_url,
    article_body,
    article_id,
    article_creation_date,
    article_is_public,
    article_user_publisher,
  } = item;

  let { id } = useParams();

  return (
    <article key={article_id} className='UserArticleCard'>
      <NavLink to={'/user_article/' + article_id}>
        <div className='UserArticleCardContent'>
          <div
            style={{ backgroundImage: `url(${article_image_url})` }}
            className='article_image_url'
          ></div>
          <div className='article_title'>
            {article_title.slice(0, 46)}
            {article_title.length >= 46 && '...'}
          </div>
          <p className='article_body'>
            {article_body.slice(0, 173)}
            {article_body.length >= 173 && '...'}
          </p>
          <div className='dateAndPublished'>
            <p className='article_user_publisher'>{article_user_publisher}</p>
            {/*     <p className='article_is_public'>
            {article_is_public ? 'Published' : 'private'}
          </p> */}
            <p className='article_creation_date'>
              {article_creation_date.toLocaleString().slice(0, 10)}
            </p>
          </div>
        </div>
      </NavLink>
    </article>
  );
}
