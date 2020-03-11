import * as React from "react";
import { EditorState, RichUtils } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import styled from "styled-components";

const EditorWrapper = styled.div`
  border: 1px solid #ccc;
  padding: 8px;
`;

const Draft = () => {
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );

  const _onClickHeaderOne = () => {
    setEditorState(RichUtils.toggleBlockType(editorState, "header-one"));
  };

  const _onClickParagraph = () => {
    setEditorState(RichUtils.toggleBlockType(editorState, "paragraph"));
  };

  return (
    <div>
      <button onClick={_onClickHeaderOne}>H1</button>
      <button onClick={_onClickParagraph}>P</button>
      <EditorWrapper>
        <Editor
          editorState={editorState}
          onEditorStateChange={setEditorState}
        />
      </EditorWrapper>
    </div>
  );
};

export default Draft;
