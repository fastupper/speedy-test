import React, { useState, useEffect } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { convertToHTML } from 'draft-convert';
import DOMPurify from 'dompurify';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './MyEditor.css';

function MyEditor() {
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );
  const [convertedContent, setConvertedContent] = useState(null);

  useEffect(() => {
    let html = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(html);
  }, [editorState]);


  // function createMarkup(html) {
  //   return {
  //     __html: DOMPurify.sanitize(html)
  //   }
  // }

  return (
    <div className="Editor">
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
        toolbar={{
          options: ['inline', 'blockType']
        }}
        hashtag={{
          separator: ' ',
          trigger: '#',
        }}
        mention={{
          separator: ' ',
          trigger: '@',
          suggestions: [
            { text: 'JavaScript', value: 'javascript', url: 'js' },
            { text: 'Golang', value: 'golang', url: 'go' },
          ],
        }}
      />
      {/* <div
        className="preview"
        dangerouslySetInnerHTML={createMarkup(convertedContent)}>
      </div> */}
    </div>
  )
}

export default MyEditor;
