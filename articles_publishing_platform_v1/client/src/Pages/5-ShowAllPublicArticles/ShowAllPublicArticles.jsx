import './ShowAllPublicArticles.css';
import backendUrl from '../../listsAndReusedConsts/backendUrl';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function ShowAllPublicArticles() {
	const [allPublicArticles, setAllPublicArticles] = useState([]);
	const [isLoading, setisLoading] = useState(true);

	useEffect(() => {
		setisLoading(true);
		const fetchPublicArticles = async () => {
			try {
				const response = await fetch(`${backendUrl}articles`);
				const result = await response.json();

				// -- ok
				if (response.ok) {
					console.log('ok');
					setAllPublicArticles(result.message);
					setisLoading(false);
				}

				// -- not ok
				if (!response.ok) {
					console.log('not ok');
				}
			} catch (error) {
				console.error(error.message);
			}
		};

		fetchPublicArticles();
	}, []);

	//-- return jsx
	return isLoading ? (
		<div className='publicArticlesAreLoading'>loading...</div>
	) : (
		<div className='ShowAllPublicArticles'>
			<div className='ShowAllPublicArticlesContent'>
				{allPublicArticles.map((item) => {
					return <PublicArticleHomeCard key={item.article_id} item={item} />;
				})}
			</div>
		</div>
	);
}

export function PublicArticleHomeCard(item) {
	const {
		article_title,
		article_image_url,
		article_body,
		article_creation_date,
		article_id,
	} = item;

	return (
		<div className='PublicArticleHomeCard'>
			<div className='PublicArticleHomeCardContent'>
				{/*  */}

				<article key={article_id} className='UserArticleCard'>
					<NavLink to={'/user_article/' + article_id}>
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

				{/*  */}
			</div>
		</div>
	);
}

/* 

article_title: {
article_image_url: {
article_body: {
article_creation_date: {
article_id: {


 */
