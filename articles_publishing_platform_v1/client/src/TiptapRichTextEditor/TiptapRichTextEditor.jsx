import './TiptapRichTextEditor.css'
import TipTapEditor from './TipTapRichFromSource'

export default function TiptapRichTextEditor({
	setCreateArticleFormData,
	setarticleLengthCheck,
	articleLengthCheck,
}) {
	return (
		<div className='TiptapRichTextEditor'>
			<div className='TiptapRichTextEditorContent'>
				<TipTapEditor
					setCreateArticleFormData={setCreateArticleFormData}
					setarticleLengthCheck={setarticleLengthCheck}
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
