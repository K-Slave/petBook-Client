import styled from "styled-components";
import { HospitalInfoUL } from "../HospitalInfo/styled";

export const Section = styled.section`
  background-color: white;
  box-shadow: -2px 0px 4px rgba(0, 0, 0, 0.1);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  .wrapper {
    padding: 1.5rem 1.25rem;
    &:first-child {
      padding-bottom: 0;
    }
  }
  header {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    margin-bottom: 6px;
    color: var(--black_01);
    & > button {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 0.2rem;
      color: inherit;
    }
    h1 {
      margin-bottom: 0.4rem;
      font-weight: 700;
      font-size: 18px;
    }
  }
  img {
    border-radius: 12px;
  }
  ${HospitalInfoUL} {
    gap: 1.25rem;
    margin: 0 0 1.125rem;
  }
`;

export const LineDiv = styled.div`
  width: 100%;
  height: 4px;
  background-color: var(--bg_white_02);
`;

export const Box = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 1.5rem 0;
  & > button {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    font-weight: 400;
    font-size: 14px;
    color: var(--black_01);
    & > svg {
      width: 16px;
      height: 22px;
    }
  }
`;
