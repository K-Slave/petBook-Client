import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 200;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(86, 86, 83, 0.4);
  backdrop-filter: blur(15px);
`;

export const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 464px;
  width: 90vw;
  padding: 40px 32px;
  border-radius: 16px;
  background-color: var(--bg_white_02);
  h1 {
    margin: 12px 0 40px;
    color: var(--black_01);
    font-size: 22px;
    line-height: 32px;
  }
  p {
    color: var(--black_03);
    font-size: 16px;
  }
`;

export const ButtonBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 8px;
  width: 100%;
  height: 52px;
  button {
    border-radius: 8px;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    &:first-child {
      color: var(--primary);
      background-color: var(--secondary);
    }
    &:last-child {
      color: var(--bg_white_02);
      background-color: var(--primary);
    }
  }
`;
