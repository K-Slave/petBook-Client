import styled from "styled-components";

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  background-color: lightgray;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  .row {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 5px;
  }
  .username {
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    color: var(--black_02);
  }
  .date {
    font-size: 14px;
    line-height: 24px;
    color: var(--black_05);
  }
  .year {
    padding: 3px 10px;
    background-color: var(--black_07);
    border-radius: 100px;
    color: var(--black_02);
    font-size: 10px;
    font-weight: 500;
  }
`;
