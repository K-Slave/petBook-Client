import styled from "styled-components";

export const ListBox = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 24px;
`;

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 220px;
  padding: 32px;
  border-radius: 16px;
  cursor: pointer;
  h4 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 22px;
  }
  &:first-child {
    background-color: #ffedd1;
  }
  &:nth-child(2) {
    background-color: #ffe7d1;
  }
  &:nth-child(3) {
    background-color: #fcf7c8;
  }
  &:nth-child(4) {
    background-color: #ffe2dc;
  }
`;
