import './PublicArticleHomeCard.css';
import { NavLink } from 'react-router-dom';
import parser from 'html-react-parser';

export default function PublicArticleHomeCard({ item }) {
  const {
    article_title,
    article_image_url,
    article_body,
    article_creation_date,
    article_id,
    article_image_height,
  } = item;

  return (
    <article className='PublicArticleHomeCard' key={article_id}>
      <NavLink to={'/article/' + article_id}>
        <div className='PublicArticleHomeCardContent'>
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
            {parser(article_body)}
            {article_body.length >= 173 && '...'}
          </p>
          <p className='article_creation_date'>
            {article_creation_date.toLocaleString().slice(0, 10)}
          </p>
        </div>
      </NavLink>
    </article>
  );
}
