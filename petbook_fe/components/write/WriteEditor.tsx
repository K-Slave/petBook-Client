import { useState } from "react";
import dynamic from "next/dynamic";
import styled from "styled-components";
import "react-quill/dist/quill.snow.css";

const WriteEditorDiv = styled.div`
  width: 100%;
  max-width: 847px;
  height: 371px;

  .quill {
    height: calc(100% - 42px);
  }

  .ql-toolbar {
    background-color: #ffffff;

    border: 1px solid #f5edde;
    border-radius: 16px 16px 0 0;
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
  }

  .ql-container {
    background-color: #ffffff;

    border: 1px solid #f5edde;
    border-radius: 0 0 16px 16px;
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
  }
`;

const QuillWrapper = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const WriteEditor = () => {
  const [value, setValue] = useState("");

  return (
    <WriteEditorDiv>
      <QuillWrapper
        theme='snow'
        value={value}
        onChange={setValue}
        placeholder={`내용을 입력하세요\n\n\n* 등록한 글은 커뮤니티에서 사용중인 닉네임으로 등록됩니다.`}
      />
    </WriteEditorDiv>
  );
};

export default WriteEditor;
