import styled from "styled-components";

export const AnimalListBox = styled.div`
  background-color: #ffefd1;
  border-radius: 12px;
  padding: 0.75rem;
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-bottom: 0.75rem;
  & > h2 {
    display: flex;
    align-items: flex-end;
    gap: 0.3rem;
    color: var(--black_01);
    font-size: 14px;
    font-weight: bold;
  }
`;

export const UL = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  & > li {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    color: var(--black_04);
    font-size: 14px;
  }
  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: white;
  }
  img {
    width: auto;
    object-fit: cover;
  }
`;
