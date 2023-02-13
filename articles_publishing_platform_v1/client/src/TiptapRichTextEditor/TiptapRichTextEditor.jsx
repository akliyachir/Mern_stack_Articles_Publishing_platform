import './TiptapRichTextEditor.css'
import TipTapEditor from './TipTapRichFromSource'
import { useEffect } from 'react'

export default function TiptapRichTextEditor({
	isMounted,
	setisMounted,
	editorFetchedContent,
	getContentFromTextEditor,
	setGetContentFromTextEditor,
	setarticleLengthCheck,
	articleLengthCheck,
	article_update_id,
}) {
	useEffect(() => {
		setisMounted(true)
	}, [])
	return (
		isMounted && (
			<div className='TiptapRichTextEditor'>
				<div className='TiptapRichTextEditorContent'>
					<TipTapEditor
						isMounted={isMounted}
						setisMounted={setisMounted}
						article_update_id={article_update_id}
						editorFetchedContent={editorFetchedContent}
						getContentFromTextEditor={getContentFromTextEditor}
						setGetContentFromTextEditor={setGetContentFromTextEditor}
						setarticleLengthCheck={setarticleLengthCheck}
						articleLengthCheck={articleLengthCheck}
					/>
					{articleLengthCheck.length > 8000 && (
						<div className='bodyTextEditorErrorMessage'>
							<p>Too much content</p>
							<p>Exceeding 8000 characters!</p>
						</div>
					)}
				</div>
			</div>
		)
	)
}
