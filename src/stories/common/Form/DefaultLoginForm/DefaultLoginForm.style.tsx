import styled from "styled-components";
import { TextBodyMedium14, TextH4Bold18 } from "../../Typography/style";

export const LoginWrapForm = styled.form`
  display: grid;
  grid-auto-flow: row;
  grid-auto-rows: auto auto auto auto;
  justify-content: center;
  row-gap: 0.5rem;

  transition: all 0.2s ease-in-out;

  * {
    transition: all 0.2s ease-in-out;
  }

  @keyframes inputReadyUp {
    from {
      opacity: 0;
      transform: translateY(0);
    }
    to {
      opacity: 1;
      transform: translateY(-0.625rem);
    }
  }

  label.Submit__Ready[data-type="email"] {
    input#Email__Input {
      height: 3.5rem;
      padding-top: 1.8125rem;
      padding-bottom: 0.625rem;
    }
  }

  label.Submit__Ready[data-type="email"]::after {
    content: "이메일";

    position: absolute;
    left: 3rem;

    ${TextBodyMedium14}
    color: var(--black_06);

    animation: inputReadyUp 0.2s ease-in-out;
    animation-fill-mode: forwards;
  }

  label.Submit__Ready[data-type="password"] {
    input#PW__Input {
      height: 3.5rem;
      padding-top: 1.8125rem;
      padding-bottom: 0.625rem;
    }
  }

  label.Submit__Ready[data-type="password"]::after {
    content: "비밀번호";

    position: absolute;
    left: 3rem;

    ${TextBodyMedium14}
    color: var(--black_06);

    animation: inputReadyUp 0.2s ease-in-out;
    animation-fill-mode: forwards;
  }
`;

export const LoginMiddleWrap = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr auto;
`;

export const LoginSubmitButton = styled.button<{ disabled: boolean }>`
  width: 100%;

  margin-top: 0.8125rem;
  padding: 0.875rem 0;

  border-radius: 8px;
  background-color: var(--primary);

  ${TextH4Bold18};
  color: #fff;

  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;
