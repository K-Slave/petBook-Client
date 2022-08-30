import styled from "styled-components";

const WriteHashTagsSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 14px;

  width: 100%;
  height: 103px;

  margin-top: 54px;

  .Hash__Tag__Title {
    font-weight: bold;
  }
`;

const WriteFormInput = styled.input`
  width: 100%;
  max-width: 1064px;
  height: 70px;

  padding: 12px 15px;

  border: 1px solid #f5edde;
  box-sizing: border-box;
  border-radius: 12px;

  &::placeholder {
    pointer-events: none;

    color: #999999;
  }
`;

const WriteHashTags = () => {
  return (
    <WriteHashTagsSection>
      <label className='Hash__Tag__Title'>해시태그</label>
      <WriteFormInput
        className='Hash__Tag__Input'
        placeholder='# 입력 (최대 5개)'
      />
    </WriteHashTagsSection>
  );
};

export default WriteHashTags;
