import './UserArticleCard.css';
import { useParams, NavLink } from 'react-router-dom';
import parser from 'html-react-parser';

export default function UserArticleCard({ item }) {
  const {
    article_title,
    article_image_url,
    article_body,
    article_body_shorten_for_card,
    article_id,
    article_creation_date,
    article_user_publisher,
    article_image_height,
  } = item;

  let { id } = useParams();

  return (
    <article key={article_id} className='UserArticleCard'>
      <NavLink to={'/user_article/' + article_id}>
        <div className='UserArticleCardContent'>
          <div
            style={{
              backgroundImage: `url(${article_image_url})`,
              backgroundPositionY: `${article_image_height}%`,
            }}
            className='article_image_url'
          ></div>
          <div className='article_title'>
            {article_title.slice(0, 46)}
            {article_title.length >= 46 && '...'}
          </div>
          <p className='article_body'>
            {article_body_shorten_for_card || 'hola'.slice(0, 180)}
            {!!article_body_shorten_for_card &&
            article_body_shorten_for_card.length > 1
              ? '...'
              : ''}
          </p>

          <div className='dateAndPublished'>
            <p className='article_user_publisher'>{article_user_publisher}</p>
            <p className='article_creation_date'>
              {article_creation_date.toLocaleString().slice(0, 10)}
            </p>
          </div>
        </div>
      </NavLink>
    </article>
  );
}
