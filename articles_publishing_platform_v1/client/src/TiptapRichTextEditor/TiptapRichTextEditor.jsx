import "./TiptapRichTextEditor.css";
import TipTapEditor from "./TipTapRichFromSource";
import { useState } from "react";
import parser from "html-react-parser";

export default function TiptapRichTextEditor() {
  const [richTextEditorContent, setrichTextEditorContent] = useState("");

  return (
    <div className="TiptapRichTextEditor">
      <div className="TiptapRichTextEditorContent">
        <TipTapEditor setrichTextEditorContent={setrichTextEditorContent} />
      </div>
      <div className="demoDisplayRichTextEditorContent">
        {parser(richTextEditorContent)}
      </div>
    </div>
  );
}
