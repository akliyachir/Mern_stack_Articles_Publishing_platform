import './TiptapRichTextEditor.css';
import TipTapEditor from './TipTapRichFromSource';

export default function TiptapRichTextEditor({
  createArticleFormData,
  setCreateArticleFormData,
}) {
  return (
    <div className='TiptapRichTextEditor'>
      <div className='TiptapRichTextEditorContent'>
        <TipTapEditor
          createArticleFormData={createArticleFormData}
          setCreateArticleFormData={setCreateArticleFormData}
        />
        {createArticleFormData.article_body_shorten_for_card.length > 8000 && (
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
