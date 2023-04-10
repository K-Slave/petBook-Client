import styled from "styled-components";

export const List = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px 36px;
  background-color: #fff;
  border-radius: 16px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  .HotArticle_title {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .HotArticle_stats {
    flex-shrink: 0;
    display: flex;
    gap: 12px;
    color: var(--black_03);
    & > span {
      display: flex;
      align-items: center;
      gap: 0.4rem;
    }
    svg {
      color: var(--black_03);
    }
  }
`;
