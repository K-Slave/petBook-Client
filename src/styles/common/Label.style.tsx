import { css } from "styled-components";

// TODO: 공용으로 사용할 스타일이 아님.. 수정 필요
const LabelCommonStyle = css`
  /* input checkbox 타입의 스타일을 정의합니다 */
  label:has(input[type="checkbox"]) {
    position: relative;
    display: flex;
  }
  label:has(input[type="checkbox"]) p {
    font-size: 0.875rem;
    color: var(--black_02);
    line-height: 20px;
  }

  /* label:has(input[type="checkbox"])::before {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    background-image: url(/img/common/register/checkbox.svg);
    background-repeat: no-repeat;
    background-size: contain;
  } */
  /* label:has(input[type='checkbox']:checked)::before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background-image: url(/img/common/register/checkbox_active.svg);
    background-repeat: no-repeat;
    background-size: contain;
  } */
`;

export default LabelCommonStyle;
