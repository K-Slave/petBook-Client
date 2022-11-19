import styled, { css } from "styled-components";

const ArticleFilterDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 32px;
`;

const selectedStyle = css`
  padding: 8px 22px;
  background-color: #000;
  font-weight: 700;
  color: #fff;
`;

const notSelectedStyle = css`
  padding: 0;
  font-weight: normal;
  color: #000;
`;

const CategoryFilterButton = styled.button<{ selected: boolean }>`
  ${({ selected }) => (selected ? selectedStyle : notSelectedStyle)};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 20px;
  font-size: 20px;
`;

const CategoryFilterDiv = styled.div`
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
`;

const SortFilterDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  p,
  button {
    font-size: 20px;
  }
  button {
    display: flex;
    align-items: center;
  }
`;

export {
  ArticleFilterDiv,
  CategoryFilterButton,
  CategoryFilterDiv,
  SortFilterDiv,
};
