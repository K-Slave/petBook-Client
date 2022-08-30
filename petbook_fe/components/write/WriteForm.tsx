import styled from "styled-components";
import WriteEditor from "./WriteEditor";

const WriteFormSection = styled.section`
  display: grid;
  grid-template-columns: 4.2995fr 1fr;
  /* grid-template-columns: 847px 197px; */

  width: 100%;
  max-width: 1064px;

  grid-row-gap: 20px;
  grid-column-gap: 20px;

  nav {
    grid-row-start: 1;
    grid-row-end: 3;
    grid-column-start: 2;
    grid-column-end: 3;
  }
`;

const WriteFormInput = styled.input`
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

const WriteFormNav = styled.nav`
  width: 100%;
  max-width: 197px;
  height: 461px;

  background-color: #fff5e3;
`;

const WriteForm = () => {
  return (
    <WriteFormSection>
      <WriteFormInput placeholder='제목을 입력하세요' />
      <WriteFormNav />
      <WriteEditor />
    </WriteFormSection>
  );
};

export default WriteForm;
