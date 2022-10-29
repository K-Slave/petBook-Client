import styled from "styled-components";

const WriteFormSection = styled.section`
  display: grid;
  grid-template-columns: 4.2995fr 1fr;
  /* grid-template-columns: 847px 197px; */

  width: 100%;
  max-width: 1064px;

  grid-row-gap: 20px;
  grid-column-gap: 20px;
`;

const WriteTitleInput = styled.input`
  width: 100%;
  max-width: 847px;
  height: 70px;

  padding: 12px 15px;

  border: 1px solid #f5edde;
  box-sizing: border-box;
  border-radius: 12px;

  &::placeholder {
    pointer-events: none;

    font-style: italic;
    line-height: 1.3;
    color: rgba(0, 0, 0, 0.6);
  }
`;

const WriteGuideDiv = styled.div`
  grid-row-start: 1;
  grid-row-end: 3;
  grid-column-start: 2;
  grid-column-end: 3;

  width: 100%;
  max-width: 197px;
  height: 461px;

  background-color: #fff5e3;
`;

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

export { WriteFormSection, WriteTitleInput, WriteGuideDiv, WriteEditorDiv };
