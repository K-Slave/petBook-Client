import styled from "styled-components";

export const MenuBox = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
`;

export const MenuButton = styled.button`
  width: 100%;
  height: 100%;
  color: var(--black_04);
`;

export const MenuList = styled.div`
  position: absolute;
  top: 24px;
  right: 0;
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.5rem 0;
  background-color: white;
  border: 1px solid var(--bg_white_01);
  box-shadow: 0px 8px 12px rgba(50, 26, 9, 0.1);
  border-radius: 12px;
  color: var(--black_02);
  button {
    width: 100%;
    text-align: left;
    padding: 0.5rem 0 0.5rem 1.25rem;
  }
`;
