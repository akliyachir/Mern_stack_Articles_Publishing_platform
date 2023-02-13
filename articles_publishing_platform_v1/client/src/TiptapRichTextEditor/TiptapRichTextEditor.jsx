import './TiptapRichTextEditor.css';
import TipTapEditor from './TipTapRichFromSource';
import { useEffect } from 'react';

export default function TiptapRichTextEditor({
	getContentFromTextEditor,
	setGetContentFromTextEditor,
	setarticleLengthCheck,
	articleLengthCheck,
}) {
	useEffect(() => {
		setisMounted(true);
	}, []);
	return (
		isMounted && (
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
