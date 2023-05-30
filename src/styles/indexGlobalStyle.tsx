import styled, { createGlobalStyle } from "styled-components";

const IndexGlobalStyle = createGlobalStyle`
  #__next {
    display: flex;
    flex-direction: column;
    align-items: center;

    min-height: 100vh;

    background-color: #fefdf8;
  }
`;

export const IndexPageMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 63.75rem;
  height: 100%;

  @media screen and (max-width: 1020px) {
    width: 48rem;
  }

  @media screen and (max-width: 768px) {
    width: 100vw;
  }
`;

export default IndexGlobalStyle;
