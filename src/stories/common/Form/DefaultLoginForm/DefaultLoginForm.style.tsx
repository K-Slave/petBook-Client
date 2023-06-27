import styled, { css } from "styled-components";
import { TextBodyMedium14, TextH4Bold18 } from "../../Typography/style";
import Button from "../../Button";

const LoginInputAfterStyle = css`
  position: absolute;
  left: 3.0625rem;

  ${TextBodyMedium14}
  color: var(--black_06);
`;

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
      transform: translateY(0);
    }
    to {
      transform: translateY(-0.625rem);
    }
  }

  @keyframes inputReadyDown {
    from {
      transform: translateY(-0.625rem);
    }
    to {
      transform: translateY(0);
    }
  }

  label.Input__Focused {
    input {
      height: 3.5rem;
      padding-top: 1.8125rem;
      padding-bottom: 0.625rem;
    }
  }

  label.Input__Focused[data-type="email"]::after {
    content: "이메일";

    ${LoginInputAfterStyle}
    animation: inputReadyUp 0.2s ease-in-out forwards;
  }

  label.Input__Blured[data-type="email"]::after {
    content: "이메일";

    ${LoginInputAfterStyle}
    animation: inputReadyDown 0.2s ease-in-out forwards;
  }

  label.Input__Focused[data-type="password"]::after {
    content: "비밀번호";

    ${LoginInputAfterStyle}
    animation: inputReadyUp 0.2s ease-in-out forwards;
  }

  label.Input__Blured[data-type="password"]::after {
    content: "비밀번호";

    ${LoginInputAfterStyle}
    animation: inputReadyDown 0.2s ease-in-out forwards;
  }

  label.Input__FadeOut::after {
    transition: all 0.2s ease-in-out;
    opacity: 0;
  }
`;

export const LoginMiddleWrap = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr auto;
`;

export const LoginSubmitButton = styled(Button)<{ disabled: boolean }>`
  width: 100%;

  margin-top: 0.8125rem;
  padding: 0.875rem 0;

  border-radius: 8px;

  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;
