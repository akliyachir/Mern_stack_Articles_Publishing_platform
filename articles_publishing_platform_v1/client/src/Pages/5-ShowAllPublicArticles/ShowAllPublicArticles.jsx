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
					return <PublicArticleHomeCard item={item} />;
				})}
			</div>
		</div>
	);
}

export function PublicArticleHomeCard({ item }) {
	console.log(item);
	const {
		article_title,
		article_image_url,
		article_body,
		article_creation_date,
		article_id,
	} = item;

	return (
		<div key={article_id} className='article_tile'>
			{article_title}
		</div>
	);
}
