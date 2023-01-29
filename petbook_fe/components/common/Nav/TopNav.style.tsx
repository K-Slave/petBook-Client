import styled from "styled-components";

export const TopNavBox = styled.nav`
  display: flex;
  justify-content: center;
  align-items: flex-end;

  width: 100%;

  padding-top: 105px;

  border-bottom: 1px solid #e0dfd9;
  box-shadow: 0px 2px 4px #eeece2;
`;

export const TopNavDiv = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: auto 1fr auto;
  grid-column-gap: 1.8047vw;
  align-items: flex-end;

  width: 100%;
  max-width: 67.5vw;
`;
