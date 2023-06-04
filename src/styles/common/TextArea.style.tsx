import { css } from "styled-components";

const TextAreaCommonStyle = css`
  textarea::placeholder {
    color: var(--disabled-font);
    line-height: 19.2px;
    font-size: 0.875rem;
  }
`;

export default TextAreaCommonStyle;
