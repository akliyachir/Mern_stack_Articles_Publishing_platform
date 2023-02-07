import './LexicalSetupPage.css'


// -- lexical import 
import { $getRoot, $getSelection } from 'lexical';
import { useEffect } from 'react';

import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { PlainTextPlugin } from '@lexical/react/LexicalPlainTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';


// -- lexical theme
const theme = {
 // Theme styling goes here
 // ...
}


// -- function component
export default function LexicalSetupPage() {


 function onChange(editorState) {
  editorState.read(() => {
   // Read the contents of the EditorState here.
   const root = $getRoot();
   const selection = $getSelection();

   console.log(root, selection);
  });
 }

 function onError(error) {
  console.error(error);
 }

 const initialConfig = {
  namespace: 'MyEditor',
  theme,
  onError,
 };

 function MyCustomAutoFocusPlugin() {
  const [editor] = useLexicalComposerContext();
  console.log(editor)
 }


 return (
  <div className='LexicalSetupPage'>
   <div className="LexicalSetupPageContent">
    {/* lexical */}
    <LexicalComposer initialConfig={initialConfig}>
     <PlainTextPlugin
      contentEditable={<ContentEditable />}
      placeholder={<div>Enter some text...</div>}
      ErrorBoundary={LexicalErrorBoundary}
     />
     <OnChangePlugin onChange={onChange} />
     <HistoryPlugin />
     <MyCustomAutoFocusPlugin />
    </LexicalComposer>
    {/* lexical */}
   </div>
  </div>
 )
}