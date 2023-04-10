import localConsole from "@lib/utils/localConsole";
import styled from "styled-components";

const WriteFormSection = styled.section`
  display: grid;
  grid-template-columns: 3.88fr 1fr;
  /* grid-template-columns: 776px 200px; */

  width: 100%;
  max-width: 1000px;

  grid-row-gap: 20px;
  grid-column-gap: 24px;
`;

const WriteTitleInput = styled.input`
  width: 100%;
  max-width: 776px;
  height: 48px;

  padding: 11px 26px;

  /* border: 1px solid #f5edde; */
  /* box-sizing: border-box; */

  border: none;
  border-radius: 8px;

  font-weight: 400;
  font-size: 1rem;
  line-height: 1.625rem;

  &::placeholder {
    pointer-events: none;

    font-weight: 400;
    font-size: 1rem;
    line-height: 1.625rem;
    letter-spacing: -0.02em;
    color: #c5c4bd;
  }
`;

const WriteGuideDiv = styled.div`
  position: relative;

  grid-row-start: 1;
  grid-row-end: 3;
  grid-column-start: 2;
  grid-column-end: 3;

  display: flex;
  flex-direction: column;
  align-self: flex-end;
  gap: 8px;

  width: 200px;
  height: 489px;

  padding: 33px 16px;

  background-color: #eeede7;
  border-radius: 8px;

  .Write__Guide__Spring__0 {
  }

  .Write__Guide__Spring__1 {
    left: 32px;
  }
  .Write__Guide__Spring__2 {
    left: 158px;
  }

  .Write__Guide__Spring__3 {
    left: 174px;
  }

  .Write__Guide__Title {
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.875rem;
  }

  .Write__Guide__Content {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.625rem;
    color: #777774;
  }
`;

const GuideTopSpringDiv = styled.div`
  position: absolute;
  top: -10px;

  width: 10px;
  height: 20px;

  background: #c5c4bd;
  border-radius: 20px;
`;

const WriteEditorDiv = styled.div`
  position: relative;

  width: 100%;
  max-width: 776px;
  height: 430px;

  .quill {
    height: calc(100% - 42px);
  }

  .ql-toolbar {
    background-color: #ffffff;

    border: none;
    border-bottom: 1px solid #f8f7f2;
    border-radius: 8px 8px 0 0;
    /* box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16); */
  }

  .ql-container {
    background-color: #ffffff;

    border: none;
    border-radius: 0 0 8px 8px;
    /* box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16); */
  }

  .ql-editor {
    display: block;

    width: 100%;
    max-width: 100%;

    padding: 20px 24px;

    font-weight: 400;
    font-size: 16px;
    line-height: 30px;

    & > * {
      display: inline-block;

      width: 100%;
      max-width: 100%;

      word-break: break-all;
    }
  }

  .ql-editor.ql-blank::before {
    left: 24px;

    font-family: "Pretendard";
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.625rem;
    letter-spacing: -0.02em;
    color: #c5c4bd;
  }
`;

const WriteContentLengthP = styled.p`
  position: absolute;
  bottom: 29px;
  right: 38px;
  z-index: 100;

  background-color: #fff;

  font-weight: 400;
  font-size: 16px;
  line-height: 30px;

  color: rgba(0, 0, 0, 0.6);
`;

export {
  WriteFormSection,
  WriteTitleInput,
  WriteGuideDiv,
  GuideTopSpringDiv,
  WriteEditorDiv,
  WriteContentLengthP,
};
