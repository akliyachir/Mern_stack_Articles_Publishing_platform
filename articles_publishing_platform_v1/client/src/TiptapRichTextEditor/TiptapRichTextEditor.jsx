import './TiptapRichTextEditor.css';
import TipTapEditor from './TipTapRichFromSource';
import { useState } from 'react';
import parser from 'html-react-parser';

export default function TiptapRichTextEditor({
  setCreateArticleFormData,
  createArticleFormData,
}) {
  return (
    <div className='TiptapRichTextEditor'>
      <div className='TiptapRichTextEditorContent'>
        <TipTapEditor
          setCreateArticleFormData={setCreateArticleFormData}
          createArticleFormData={createArticleFormData}
        />
      </div>
      {/* display the content in react */
      /*       <div className="demoDisplayRichTextEditorContent">
        {parser(richTextEditorContent)}
      </div> */}
    </div>
  );
}
