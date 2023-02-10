import './TiptapRichTextEditor.css';
import TipTapEditor from './TipTapRichFromSource';

export default function TiptapRichTextEditor({ setRowArticleBodyContentTextEditor }) {
  return (
    <div className='TiptapRichTextEditor'>
      <div className='TiptapRichTextEditorContent'>
        <TipTapEditor
          setRowArticleBodyContentTextEditor={
            setRowArticleBodyContentTextEditor
          }
        />
      </div>
      {/* display the content in react */
      /*       <div className="demoDisplayRichTextEditorContent">
        {parser(richTextEditorContent)}
      </div> */}
    </div>
  );
}
