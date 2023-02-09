import './TiptapRichTextEditor.css';
import TipTapEditor from './TipTapRichFromSource';
import { useState } from 'react';
import parser from 'html-react-parser';
c;
export default function TiptapRichTextEditor({ setrichTextEditorContent }) {
  return (
    <div className='TiptapRichTextEditor'>
      <div className='TiptapRichTextEditorContent'>
        <TipTapEditor setrichTextEditorContent={setrichTextEditorContent} />
      </div>
      {/* display the content in react */
      /*       <div className="demoDisplayRichTextEditorContent">
        {parser(richTextEditorContent)}
      </div> */}
    </div>
  );
}
