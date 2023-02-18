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
  text-align: center;
  margin-bottom: 32px;
  p {
    color: var(--black_03);
    margin-bottom: 4px;
    font-size: 16px;
    font-weight: 400;
  }
  h3 {
    color: var(--black_01);
    font-size: 22px;
    line-height: 32px;
    font-weight: 700;
  }
`;

export const ReviewSelectChip = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 8px;
  /* Chip 공통 */
  li {
    display: flex;
    align-items: center;
    margin: 0 8px 8px 0;
    padding: 12px 16px;
    height: 48px;
    box-sizing: border-box;
    font-size: 14px;
    &:not(.My) {
      border-radius: 40px;
      border: solid 1px var(--bg_white_01);
      background-color: #fff;
      color: var(--black_03);
      .Img {
        background-color: #222;
        width: 23.33px;
        height: 23.33px;
        margin-right: 6.33px;
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

export const ReviewFormReactionBtn = styled.label.attrs((props) => ({
  value: props.key,
  type: "radio",
}))`
  padding: 16px;
  border: solid 1px var(--black_06);
  border-radius: 8px;
  width: 100%;
  text-align: center;
  letter-spacing: -2%;
  appearance: none;
  cursor: pointer;
  &.on {
    border: none;
    background-color: ${(props) =>
      props.value === "Y" ? "#00DD6D" : "#FF3F02"};
    color: white;
  }
  input {
    appearance: none;
  }
`;
