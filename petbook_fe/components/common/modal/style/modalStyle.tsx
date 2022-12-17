import styled from "styled-components";

export const ModalBg = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(86, 86, 83, 0.3);
`;
export const ModalContainer = styled.div<{ props: boolean }>`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  display: ${({ props }) => (props === true ? "block" : "none")};
  width: 100vw;
  height: 100vh;
`;
export const ModalItemWrap = styled.section`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  border-radius: 16px;

  text-align: center;
  background-color: var(--modal-bg);
  padding: 48px 32px 30px;
  max-width: 464px;
  width: calc(100% - 16px);
`;
export const ModalContentsContainer = styled.div`
  margin-top: 16px;
  hgroup {
    font-size: 1.375rem;
    margin-bottom: 32px;
  }
`;
export const ModalButton = styled.button`
  margin-top: 32px;
`;

export default {
  ModalBg,
  ModalContainer,
  ModalContentsContainer,
  ModalItemWrap,
};
