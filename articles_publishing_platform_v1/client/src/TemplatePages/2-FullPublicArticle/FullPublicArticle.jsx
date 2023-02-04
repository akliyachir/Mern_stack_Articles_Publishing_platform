import './FullPublicArticle.css';
import { useParams } from 'react-router-dom';

export default function FullPublicArticle() {
	const { public_article_id } = useParams();
	return <div className='FullPublicArticle'>{public_article_id}</div>;
}
