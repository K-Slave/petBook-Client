import styled from "styled-components";

const CommentListDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  .Item_Content {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: var(--black_01);
  }
  .Item_Button_Box {
    display: flex;
    gap: 12px;
    align-items: center;
    justify-content: flex-end;
    margin-top: 32px;
    color: var(--black_03);
    & > div {
      display: flex;
      align-items: center;
    }
  }
  .Item_Row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { CommentListDiv };
