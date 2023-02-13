import './UpdateUserArticle.css'
import { useParams } from 'react-router-dom'

export default function UpdateUserArticle() {
	const { article_update_id } = useParams()
	return (
		<div className='UpdateUserArticle'>
			<div className='UpdateUserArticleContent'>
				Update Article <span>{article_update_id}</span>
			</div>
		</div>
	)
}
