import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { TreeView } from '@lexical/react/LexicalTreeView';
import { useState } from 'react';

export default function TreeViewPlugin() {
  const [editor] = useLexicalComposerContext();
  console.log(editor);

  return (
    <TreeView
      viewClassName='tree-view-output'
      timeTravelPanelClassName='debug-timetravel-panel'
      timeTravelButtonClassName='debug-timetravel-button'
      timeTravelPanelSliderClassName='debug-timetravel-panel-slider'
      timeTravelPanelButtonClassName='debug-timetravel-panel-button'
      editor={editor}
    />
  );
}
