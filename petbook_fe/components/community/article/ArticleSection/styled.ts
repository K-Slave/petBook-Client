import styled from "styled-components";

export const ArticleSectionBox = styled.section`
  display: flex;
  flex-direction: column;
  padding: 48px 40px 32px;
  border-radius: 16px;
  background-color: #fff;
  .ArticleSection_Top_Row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .ArticleSection_Button_Box {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 27px;
    gap: 12px;
    & > div {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      color: var(--black_03);
      & > button {
        display: flex;
        align-items: center;
        color: inherit;
      }
    }
  }
  .ArticleSection_Content {
    margin: 32px 0;
    color: var(--black_01);
    font-size: 16px;
    font-weight: 400;
    line-height: 160%;
  }
  h2 {
    font-weight: 700;
    font-size: 22px;
    line-height: 32px;
    color: var(--black_01);
  }
`;

export const Spacer = styled.div`
  height: 32px;
`;
