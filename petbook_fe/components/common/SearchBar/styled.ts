import styled from "styled-components";

export const SearchBarInput = styled.input`
  width: 100% !important;
  height: 100% !important;
  padding: 0 40px 0 8px !important;
  border: 2px solid var(--black_04) !important;
  background-color: white !important;
  outline: none !important;
  &:focus {
    border-color: var(--primary) !important;
  }
  &:focus + svg {
    color: var(--primary) !important;
  }
`;

export const SearchBarDiv = styled.div`
  width: 278px;
  height: 40px;
  position: relative;
  box-shadow: 0px 20px 16px -20px #d6d3c5;
  border-radius: 8px;
  svg {
    position: absolute;
    top: 50%;
    right: 12px;
    font-size: 1.5rem;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;

export const KeywordUl = styled.ul`
  position: absolute;
  top: 33px;
  left: 0;
  right: 0;
  max-height: 189px;
  padding: 0.8rem 0;
  overflow-y: scroll;
  background: white;
  border: 1px solid var(--black_06);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.1);
  z-index: 5;
  &::-webkit-scrollbar {
    display: none;
  }
  li {
    padding: 0.5rem 1rem;
    font-weight: 400;
    font-size: 14px;
    color: var(--black_01);
    cursor: pointer;
    &:hover {
      background-color: var(--bg_white_02);
    }
  }
`;
