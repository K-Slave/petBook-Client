import styled from "styled-components";

export const BoxGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px 24px;
`;

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 36px;
  background-color: white;
  border-radius: 16px;
  h3 {
    font-weight: bold;
    font-size: 22px;
  }
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .text {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    color: gray;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 16px;
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }
  .Article_title {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: pointer;
  }
  .Article_scrap {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    color: var(--black_03);
    flex-shrink: 0;
  }
`;
