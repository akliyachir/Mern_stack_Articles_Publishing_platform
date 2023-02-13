import './TiptapRichTextEditor.css'
import TipTapEditor from './TipTapRichFromSource'

export default function TiptapRichTextEditor({
	editorFetchedContent,
	getContentFromTextEditor,
	setGetContentFromTextEditor,
	setarticleLengthCheck,
	articleLengthCheck,
	article_update_id,
}) {
	return (
		<div className='TiptapRichTextEditor'>
			<div className='TiptapRichTextEditorContent'>
				<TipTapEditor
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
}
