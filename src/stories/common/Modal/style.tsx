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
  h1 {
    color: var(--black_01);
    font-size: 1.375rem;
    line-height: 32px;
  }
  .sub-title {
    color: var(--black_03);
    font-size: 1rem;
    margin-bottom: 0.25rem;
    line-height: 160%;
  }
`;

export const ModalBox = styled.div<{ modalBox?: boolean }>`
  ${({ modalBox }) =>
    modalBox &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 464px;
      max-height: 90vh;
      width: 90vw;
      padding: 2.5rem 2rem;
      border-radius: 16px;
      background-color: var(--bg_white_02);
      overflow: hidden;
    `}
`;

export const ButtonBox = styled.div<{ count: number }>`
  display: grid;
  grid-template-columns: ${({ count }) => (count === 1 ? "1fr" : "1fr 2fr")};
  gap: 8px;
  width: 100%;
  height: 52px;
  margin-top: 2.5rem;
`;
