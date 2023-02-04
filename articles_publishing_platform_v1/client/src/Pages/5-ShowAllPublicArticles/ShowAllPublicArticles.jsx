import './ShowAllPublicArticles.css';

export default function ShowAllPublicArticles() {
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
