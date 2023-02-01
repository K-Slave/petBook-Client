import styled from "styled-components";

export const HospitalInfoUL = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 0 0.5rem;
  margin: 0.75rem 0 1.5rem;
`;

export const LI = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--black_03);
  font-weight: 500;
  font-size: 16px;
  & > span:first-child {
    display: flex;
    align-items: center;
    gap: 0.375rem;
    color: var(--black_06);
  }
  & > button {
    display: flex;
    align-items: center;
    justify-content: center;
    color: inherit;
  }
`;
