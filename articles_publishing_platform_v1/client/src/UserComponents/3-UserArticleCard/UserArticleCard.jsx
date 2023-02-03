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
        <div
          style={{ backgroundImage: `url(${article_image_url})` }}
          className='article_image_url'
        ></div>
        <div className='article_title'>
          {article_title.slice(0, 52)}
          {article_title.length >= 52 && '...'}
        </div>
        <p className='article_body'>
          {article_body.slice(0, 190)}
          {article_body.length >= 190 && '...'}
        </p>
        <p className='article_creation_date'>
          {article_creation_date.toLocaleString().slice(0, 10)}
        </p>
        <p className='article_is_public'>
          {article_is_public ? 'published' : 'private'}
        </p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, eaque
        sint fugit quidem non delectus expedita id reprehenderit natus possimus!
        Porro, praesentium maxime. Corporis iste adipisci neque totam in
        deleniti.
      </div>
    </article>
  );
}
