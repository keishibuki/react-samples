import * as React from "react";
import { Editor, EditorState } from "draft-js";
import styled from "styled-components";

const EditorWrapper = styled.div`
  border: 1px solid #ccc;
  padding: 8px;
`;

const Draft = () => {
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );

  return (
    <EditorWrapper>
      <Editor editorState={editorState} onChange={setEditorState} />
    </EditorWrapper>
  );
};

export default Draft;
