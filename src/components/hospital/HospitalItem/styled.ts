import styled from "styled-components";

export const ItemHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.75rem 0;
  color: var(--black_01);
  & > h1:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  & > button {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: inherit;
  }
`;

export const ImageSliderDiv = styled.div`
  position: relative;
  height: 180px;
  background: #e1e1e1;
  border-radius: 12px;
`;
