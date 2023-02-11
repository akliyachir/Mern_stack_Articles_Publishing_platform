import './TiptapRichTextEditor.css';
import TipTapEditor from './TipTapRichFromSource';

export default function TiptapRichTextEditor({
  createArticleFormData,
  setCreateArticleFormData,
  setarticleLengthCheck,
  articleLengthCheck,
  getContentFromTheTextEditor,
  setgetContentFromTheTextEditor,
}) {
  return (
    <div className='TiptapRichTextEditor'>
      <div className='TiptapRichTextEditorContent'>
        <TipTapEditor
          createArticleFormData={createArticleFormData}
          setCreateArticleFormData={setCreateArticleFormData}
          setarticleLengthCheck={setarticleLengthCheck}
          getContentFromTheTextEditor={getContentFromTheTextEditor}
          setgetContentFromTheTextEditor={setgetContentFromTheTextEditor}
        />
        {articleLengthCheck.length > 8000 && (
          <div className='bodyTextEditorErrorMessage'>
            <p>Too much content</p>
            <p>Exceeding 8000 characters!</p>
          </div>
        )}
      </div>
      {/* display the content in react */
      /*       <div className="demoDisplayRichTextEditorContent">
        {parser(richTextEditorContent)}
      </div> */}
    </div>
  );
}
