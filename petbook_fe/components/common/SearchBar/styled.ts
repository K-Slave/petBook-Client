import styled from "styled-components";

export const SearchBarInput = styled.input`
  width: 278px !important;
  height: 40px !important;
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
