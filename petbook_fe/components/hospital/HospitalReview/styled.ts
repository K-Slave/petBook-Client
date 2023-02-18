import styled from "styled-components";

export const ReviewWarp = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 12;

  padding: 2.5rem 2rem;
  border-radius: 16px;

  width: calc(100vw - 16px);
  height: calc(100vh - 16px);
  max-height: calc(100vh - 12.5rem);
  max-width: 29rem;

  background-color: var(--modal-bg);
`;

export const ReviewHeader = styled.hgroup`
  margin-bottom: 32px;
  text-align: center;
  p {
    margin-bottom: 4px;
    font-size: 16px;
    font-weight: 400;
    color: var(--black_03);
  }
  h3 {
    font-size: 22px;
    line-height: 32px;
    font-weight: 700;
    color: var(--black_01);
  }
`;

export const ReviewSelectChip = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 8px;
  /* Chip 공통 */
  li {
    display: flex;
    margin: 0 8px 8px 0;
    padding: 12px 16px;
    height: 48px;
    align-items: center;
    font-size: 14px;
    box-sizing: border-box;
    &:not(.My) {
      border-radius: 40px;
      border: solid 1px var(--bg_white_01);
      background-color: #fff;
      color: var(--black_03);
      .Img {
        margin-right: 6.33px;
        width: 23.33px;
        height: 23.33px;
        background-color: #222;
      }
    }
    /* 진료받은 내동물 */
    &.My {
      h4 {
        font-weight: 700;
      }
    }
  }
`;

export const ReviewForm = styled.article`
  gap: 8px;
  display: grid;
  form {
    display: grid;
    gap: 8px;
  }
  p {
    font-weight: 700;
    font-size: 14px;
  }
`;

export const ReviewButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 6px;
`;

export const ReviewFormReactionBtn = styled.label`
  padding: 16px;

  border: solid 1px var(--black_06);
  border-radius: 8px;

  width: 100%;

  text-align: center;
  font-size: 14px;
  letter-spacing: -2%;
  color: var(--disabled-font);

  appearance: none;
  cursor: pointer;

  input {
    display: none;
  }
  &:has(input:checked) {
    border: none;
    background-color: ${(props) =>
      props.htmlFor === "Y" ? "#00DD6D" : "#FF3F02"};
    color: white;
  }
`;
