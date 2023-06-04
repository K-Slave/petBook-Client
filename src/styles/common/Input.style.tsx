import { css } from "styled-components";

const InputCommonStyle = css`
  //커스텀 input
  /* input:not(input.default) {
  padding: 20px 22px 20px 48px;
  width: 100%;
  height: 48px;
  border-radius: 8px;
  border: solid 1px #fff;
  outline: none;
  box-sizing: border-box;
}
input:not(input.default):focus,
.Review textarea:focus {
  border: solid 1px var(--black_04);
  box-shadow: 0px 20px 16px -20px #d6d3c5;
} */

  input:focus {
    outline: solid 1px var(--primary);
  }

  input::placeholder {
    color: var(--disabled-font);
    line-height: 1.2rem;
    font-size: 0.875rem;
  }

  input[type="checkbox"] {
    position: relative;
    visibility: hidden;
    margin-right: 7px;
    width: 20px !important;
    height: 20px !important;
    font-size: 0.875rem;
  }
`;

export default InputCommonStyle;
