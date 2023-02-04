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
		<article className='PublicArticleHomeCard'>
			<NavLink to={'/article/' + article_id}>
				<div className='PublicArticleHomeCardContent'>
					<div key={article_id}>
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
									{article_body.slice(0, 173)}
									{article_body.length >= 173 && '...'}
								</p>
								<p className='article_creation_date'>
									{article_creation_date.toLocaleString().slice(0, 10)}
								</p>
							</div>
						</article>
					</div>
				</div>
			</NavLink>
		</article>
	);
}
