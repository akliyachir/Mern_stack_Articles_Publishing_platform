import './FullPublicArticle.css';
import backendUrl from '../../listsAndReusedConsts/backendUrl';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function FullPublicArticle() {
	// -- useParams
	const { public_article_id } = useParams();

	//-- useState
	const [isArticleLoading, setisArticleLoading] = useState(true);
	const [articleContent, setarticleContent] = useState({});

	useEffect(() => {
		setisArticleLoading(true);
		const fetchTheFullArticle = async () => {
			try {
				const response = await fetch(backendUrl + 'articles/' + public_article_id);
				const result = await response.json();

				//-- ok
				if (response.ok) {
					console.log('ok');
					setarticleContent(result.message);
					setisArticleLoading(false);
				}

				//-- not ok
				if (!response.ok) {
					console.log('not ok');
				}
			} catch (error) {
				console.error(error.message);
			}
		};
		fetchTheFullArticle();
	}, []);

	const {
		article_body,
		article_creation_date,
		article_id,
		article_image_url,
		article_title,
	} = articleContent;

	return isArticleLoading ? (
		<div className='isLoading'>loading...</div>
	) : (
		<article className='FullPublicArticle'>
			<div className='FullPublicArticleContent'>
				<div
					style={{ backgroundImage: `url(${article_image_url})` }}
					className='article_image_url'
				></div>
				<div className='article_title'>{article_title}</div>
				<div className='article_body'>{article_body}</div>
				<div className='article_creation_date'>
					{article_creation_date.toLocaleString().slice(0, 10)}
				</div>
			</div>
		</article>
	);
}
/* 
article_creation_date,
article_id,
article_image_url,
article_title

*/
