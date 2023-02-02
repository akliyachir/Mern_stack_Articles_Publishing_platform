import './GetUserArticles.css';
import { useState, useEffect } from 'react';
import backendUrl from '../../listsAndReusedConsts/backendUrl';

export default function GetUserArticles() {
	const [artilce, setArtilce] = useState([]);

	useEffect(() => {
		const getArticles = async () => {
			const { token } = globalThis.localStorage('user');
			const response = await fetch(backendUrl + 'user_article', {
				headers: {
					authorization: JSON.stringify(`Bearer ${token}`),
				},
			});

			const result = await response.json();

			if (!response.ok) {
				console.log('not ok');
				console.error(result.message);
			}

			if (!response.ok) {
				console.log('ok');
				setArtilce(result.message);
				console.log(result.message);
			}
		};
	}, []);

	return (
		<div className='GetUserArticles'>
			<div className='GetUserArticlesContainer'>
				ceci et cela, les articles a disposition
			</div>
		</div>
	);
}
