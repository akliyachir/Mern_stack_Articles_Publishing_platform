import './UserArticleCard.css';

export default function UserArticleCard({ item }) {
  const {
    article_title,
    article_image_url,
    article_body,
    article_id,
    article_creation_date,
    article_is_public,
  } = item;
  return (
    <article key={article_id} className='UserArticleCard'>
      <div className='UserArticleCardContent'>
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
        <p className='article_is_public'>
          {article_is_public ? 'published' : 'private'}
        </p>
      </div>
    </article>
  );
}
