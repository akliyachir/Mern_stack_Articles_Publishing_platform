import './UpdateUserArticle.css'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import backendUrl from '../../listsAndReusedConsts/backendUrl'
import TiptapRichTextEditor from '../../TiptapRichTextEditor/TiptapRichTextEditor'

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
