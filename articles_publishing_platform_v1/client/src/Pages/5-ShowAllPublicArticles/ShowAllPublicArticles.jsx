import './ShowAllPublicArticles.css';
import backendUrl from '../../listsAndReusedConsts/backendUrl';
import { useEffect } from 'react';

export default function ShowAllPublicArticles() {
	useEffect(() => {
		const fetchPublicArticles = async () => {
			const response = await fetch(`${backendUrl}articles`);
			const result = await response.json();
			console.log(result.message);
		};

		console.log(backendUrl);

		fetchPublicArticles();
	}, []);

	//-- return jsx
	return (
		<div className='ShowAllPublicArticles'>
			<div className='ShowAllPublicArticlesContent'>
				<PublicArticleHomeCard />
			</div>
		</div>
	);
}

export function PublicArticleHomeCard() {
	return (
		<div className='PublicArticleHomeCard'>
			<div className='PublicArticleHomeCardContent'> ici vont les articles</div>
		</div>
	);
}
