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
  button {
    position: absolute;
    top: 50%;
    width: 20px;
    height: 20px;
    z-index: 2;
    transform: translateY(-50%);
    &:first-child {
      left: 10px;
    }
    &:last-child {
      right: 10px;
    }
    svg {
      height: 10px;
    }
  }
`;
