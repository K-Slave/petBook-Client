import styled, { css } from "styled-components";

export const ArticleListDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ItemArticle = styled.article`
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  padding: 32px;
  background: #ffffff;
  color: var(--black_01);
  cursor: pointer;
  h3 {
    margin-bottom: 8px;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
  }
  .Item_Content {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-bottom: 20px;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .Item_Stats {
    display: flex;
    gap: 12px;
    & > div {
      display: flex;
      align-items: center;
      color: var(--black_02);
    }
    path {
      stroke: var(--black_02) !important;
    }
  }
  .Item_Row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .reverse-row {
    display: flex;
    flex-direction: row-reverse;
    gap: 12px;
  }
`;

export const PageButtonBoxDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  margin-top: 53px;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      margin: 0 10px;
    }
  }
`;

const selectedStyle = css`
  color: var(--black_01);
`;

export const PageButton = styled.button<{ selected: boolean }>`
  width: 32px;
  height: 32px;
  padding: 0;
  font-size: 16px;
  font-weight: normal;
  color: var(--black_05);
  ${({ selected }) => selected && selectedStyle};
`;
