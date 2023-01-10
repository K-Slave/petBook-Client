import styled from "styled-components";

const WriteHashTagsSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: 100%;

  margin: 32px 0;
`;

const HashTagTitleP = styled.p`
  font-weight: 700;
  font-size: 1.375rem;
  line-height: 2rem;
  color: #383835;
`;

const WriteHashDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  width: 100%;
  max-width: 1000px;

  padding: 14px 24px;

  background-color: #ffffff;

  border-radius: 8px;
  box-sizing: border-box;

  &.Error {
    animation: errorShake 0.1s 3;
  }
`;

const HashInput = styled.input`
  position: relative;

  display: inline-block;

  width: 103px;

  border: none;
  /* border-radius: 40px; */

  /* background-color: #f8f7f2; */

  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.5rem;
  color: #777774;

  &::placeholder {
    pointer-events: none;

    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.5rem;
    letter-spacing: -0.02em;
    color: #aaaaa7;
  }

  &:focus {
    outline: none;
  }
`;

const RoundHashTagButton = styled.button`
  padding: 4px 16px;

  border-radius: 40px;
  background-color: #f8f7f2;

  white-space: nowrap;
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.5rem;
  letter-spacing: -0.02em;
  color: #777774;
`;

export {
  WriteHashTagsSection,
  WriteHashDiv,
  HashTagTitleP,
  HashInput,
  RoundHashTagButton,
};
