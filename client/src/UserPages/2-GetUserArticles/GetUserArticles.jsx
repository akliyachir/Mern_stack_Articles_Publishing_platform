import './GetUserArticles.css';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import backendUrl from '../../listsAndReusedConsts/backendUrl';
import UserArticleCard from '../../UserComponents/3-UserArticleCard/UserArticleCard';
import { FaPlus, FaPlusCircle } from 'react-icons/fa';

export default function GetUserArticles() {
	const [article, setArticle] = useState([]);

	useEffect(() => {
		const getArticles = async () => {
			const user = globalThis.localStorage.getItem('user');
			const { token } = JSON.parse(user);
			const response = await fetch(backendUrl + 'user_article', {
				headers: {
					'Content-Type': 'application/json',
					authorization: JSON.stringify(`Bearer ${token}`),
				},
			});

			const result = await response.json();
			// -- is not ok
			if (!response.ok) {
				console.error(result.message);
			}

			// -- ok
			if (response.ok) {
				setArticle(result.message);
			}
		};

		getArticles();
	}, []);

	return (
		<div className='GetUserArticles'>
			<div className='GetUserArticlesContainer stylingTHis'>
				{/* create an article start */}
				<NavLink to='/create_article'>
					<article className='UserArticleCard'>
						<div className='createArticleContainer'>
							<div>
								<FaPlusCircle />
							</div>
							<div>Add New Article</div>
						</div>
					</article>
				</NavLink>
				{/* create an article end */}
				{article.map((item) => {
					return <UserArticleCard key={item.article_id} item={item} />;
				})}
			</div>
		</div>
	);
}
