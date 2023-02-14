import './TiptapRichTextEditor.css';
import TipTapEditor from './TipTapRichFromSource';
import { useEffect, useContext } from 'react';
import { TextEditorContentContext } from '../UserPages/4-UpdateUserArticle/UpdateUserArticle';

export default function TiptapRichTextEditor({
	getContentFromTextEditor,
	setGetContentFromTextEditor,
	setarticleLengthCheck,
	articleLengthCheck,
}) {
	const myReturnedContext = useContext(TextEditorContentContext);

	return (
		!!myReturnedContext.textEditorContentToPopulate && (
			<div className='TiptapRichTextEditor'>
				<div className='TiptapRichTextEditorContent'>
					<TipTapEditor
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
	);
}
