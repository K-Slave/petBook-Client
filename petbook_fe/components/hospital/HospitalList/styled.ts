import { SearchBarDiv } from "@components/common/SearchBar/styled";
import styled, { css } from "styled-components";

export const Section = styled.section`
  padding: 1rem 1.4rem;
  background-color: white;
  box-shadow: -2px 0px 4px rgba(0, 0, 0, 0.1);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  ${SearchBarDiv} {
    width: 100%;
  }
  & > header {
    display: flex;
    gap: 0.5rem;
    align-items: baseline;
    margin: 1rem 0 1.5rem;
    color: var(--black_01);
    & > button {
      color: var(--black_04);
    }
  }
  .Item_Wrapper {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    margin: 1rem 0;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    color: inherit;
  }
`;

export const FilterDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

export const FilterButton = styled.button<{ selected: string; name: string }>`
  padding: 0.5rem 1rem;
  border-radius: 40px;
  ${({ selected, name }) =>
    selected === name
      ? css`
          color: white !important;
          background-color: var(--black_01);
        `
      : css`
          color: var(--black_03) !important;
          background-color: var(--bg_white_02);
        `}
`;
