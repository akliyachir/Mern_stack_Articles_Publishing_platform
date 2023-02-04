import './PublicArticleHomeCard.css';
import { NavLink } from 'react-router-dom';

export default function PublicArticleHomeCard({ item }) {
	const {
		article_title,
		article_image_url,
		article_body,
		article_creation_date,
		article_id,
	} = item;

	return (
		<div key={article_id}>
			<article key={article_id} className='UserArticleCard'>
				<NavLink to={'/article/' + article_id}>
					<div className='UserArticleCardContent'>
						<div
							style={{ backgroundImage: `url(${article_image_url})` }}
							className='article_image_url_landing_page'
						></div>
						<div className='article_title_landing_page'>
							{article_title.slice(0, 52)}
							{article_title.length >= 52 && '...'}
						</div>
						<p className='article_body_landing_page_landing_page'>
							{article_body.slice(0, 173)}
							{article_body.length >= 173 && '...'}
						</p>
						<p className='article_creation_date_landing_page'>
							{article_creation_date.toLocaleString().slice(0, 10)}
						</p>
					</div>
				</NavLink>
			</article>
		</div>
	);
}
