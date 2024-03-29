import styled from "styled-components";

export const TopNavBox = styled.nav<{ maxWidth?: string; pathname?: string }>`
  display: flex;
  justify-content: center;
  align-items: flex-end;

  width: 100vw;
  /* max-width: ${(props) => (props.maxWidth ? props.maxWidth : "120rem")}; */

  margin: 0 auto;

  padding-top: 105px;

  border-bottom: 1px solid var(--black_07);
  background-color: var(--bg_white_02);
  box-shadow: 0px 2px 4px #eeece2;

  @media screen and (max-width: 768px) {
    display: ${(props) => (props.pathname === "/" ? "flex" : "none")};
  }
`;

export const TopNavDiv = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: auto 1fr auto;
  grid-column-gap: 1.8047vw;
  align-items: flex-end;

  width: 100%;
  max-width: 67.5vw;
  min-width: 22.2188rem;
`;
