import './ShowAllPublicArticles.css';
import backendUrl from '../../listsAndReusedConsts/backendUrl';
import { useEffect, useState } from 'react';

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
	return true ? (
		<div className='publicArticlesAreLoading'>loading...</div>
	) : (
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
