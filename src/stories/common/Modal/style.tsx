import styled, { css } from "styled-components";

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
  max-width: 29rem;
  max-height: 90vh;
  width: 90vw;
  padding: 2.5rem 2rem;
  border-radius: 16px;
  background-color: var(--bg_white_02);
  overflow: hidden;
`;

export const ButtonBox = styled.div<{ count: number }>`
  display: grid;
  grid-template-columns: ${({ count }) => (count === 1 ? "1fr" : "1fr 2fr")};
  gap: 0.5rem;
  width: 100%;
  height: 3.25rem;
`;
