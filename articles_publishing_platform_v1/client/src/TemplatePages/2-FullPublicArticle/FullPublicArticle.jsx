import './FullPublicArticle.css';
import backendUrl from '../../listsAndReusedConsts/backendUrl';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function FullPublicArticle() {
	//-- useState
	const [isArticleLoading, setisArticleLoading] = useState(true);
	const [articleContent, setarticleContent] = useState();

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
				}

				//-- not ok
				if (!response.ok) {
					console.log('ok');
				}
			} catch (error) {
				console.error(error.message);
			}
		};
		fetchTheFullArticle();
	}, []);

	const { public_article_id } = useParams();

	const {
		article_body,
		article_creation_date,
		article_id,
		article_image_url,
		article_title,
	} = articleContent;

	return (
		<article className='FullPublicArticle'>
			<div className='FullPublicArticleContent'></div>
		</article>
	);
}
/* 
article_body,
article_creation_date,
article_id,
article_image_url,
article_title

*/
