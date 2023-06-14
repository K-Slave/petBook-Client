import styled from "styled-components";

export const ReviewWarp = styled.section`
  padding: 1.5rem 0 0;
  max-height: calc(100vh - 12.5rem);
  width: 100%;
  overflow-y: scroll;
  position: relative;
`;

export const ReviewSelectChip = styled.section`
  margin-bottom: 16px;
  /* 진료받은 내동물 */
  h4 {
    font-weight: 700;
    display: block;
    margin-bottom: 8px;
  }
  section {
    height: auto;
    max-height: 100px;
    overflow: auto;
  }
  article {
    width: auto;
    display: inline-block;
  }
  /* Chip 공통 */
  label {
    display: flex;
    align-items: center;
    margin: 0 8px 8px 0;
    padding: 12px 16px;
    height: 40px;
    font-size: 14px;
    box-sizing: border-box;
    transition: all 0.1s ease-in-out;
    cursor: pointer;
    h5 {
      font-weight: 500;
      font-size: 14px;
    }
    input {
      display: none;
    }
    &:has(input:checked) {
      cursor: pointer;
      background-color: var(--black_01);
      h5 {
        color: white;
      }
    }
    &:has(input[type="checkbox"])::before {
      display: none;
    }
    &:not(h4) {
      border-radius: 40px;
      border: solid 1px var(--bg_white_01);
      background-color: #fff;
      color: var(--black_03);
      .Img {
        margin-right: 6.33px;
        width: 23.33px;
        height: 23.33px;
        background-image: url("/img/test_ham.png");
        background-position: center;
        background-size: contain;
        border-radius: 50%;
      }
    }
  }
`;

export const ReviewForm = styled.article`
  gap: 8px;
  display: grid;
  margin-bottom: 40px;

  transition: all 0.1s ease-in-out;
  form {
    display: grid;
    gap: 8px;
    > div {
      margin-bottom: 0;
      width: 100%;
      > div {
        top: 14px;
        transform: unset;
      }
    }
  }
  div:has(input:focus) > div .Pencil,
  div:has(input:not(:placeholder-shown)) > div .Pencil {
    background-image: url(/img/common/review/pencil_active.svg);
  }
  div:has(textarea:focus) > div .Medical,
  div:has(textarea:not(:placeholder-shown)) > div .Medical {
    background-image: url(/img/common/review/medical_active.svg);
  }
  p {
    font-weight: 700;
    font-size: 14px;
  }
`;

interface imgBoxProps {
  count: number;
}

export const ReviewAddButton = styled.button`
  position: absolute;
  top: 40px;
  right: 40px;
  padding: 8px 20px;
  height: 45px;
  color: white;
  border-radius: 8px;
  background: var(--primary);
`;

export const ImgContainer = styled.article`
  padding: 10px 12px 16px 12px;

  background-color: #fff;
  border-radius: 8px;
  hgroup {
    position: relative;
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    line-height: 32px;
    color: var(--black_06);
    p {
      display: inline-block;
      padding-left: 36px;
      color: var(--disabled-font);
      font-weight: 400;
      font-size: 14px;
      color: ${(props: imgBoxProps) =>
        props.count > 0 ? "var(--black_02)" : "var(--disabled-font)"};
    }
    .Camera {
      background-image: ${(props: imgBoxProps) =>
        props.count > 0
          ? " url(/img/common/review/camera_active.svg)"
          : " url(/img/common/review/camera.svg)"};
    }
    input {
      display: none;
    }
  }
`;
export const ImgBox = styled.article`
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 8px;
  background-color: var(--disabled);
  margin-right: 18px;
  &:nth-child(n + 6) {
    margin-top: 24px;
  }
  article {
    position: absolute;
    z-index: 2;
    right: -11px;
    top: -11px;
    width: 24px;
    height: 24px;
    background-image: url(/img/common/review/img_remove_btn.svg);
    cursor: pointer;
  }
  > div {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    img {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: auto;
      height: 100%;
    }
  }
`;
export const ImgBoxGroup = styled.article`
  display: flex;
  flex-wrap: wrap;
`;
export const ReviewButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 6px;
  button:first-child {
    flex-grow: 1;
  }
  button:last-child {
    flex-grow: 2;
  }
`;

export const ReviewFormReactionBtn = styled.label`
  line-height: 46px;

  border: solid 1px var(--black_06);
  border-radius: 8px;

  width: 100%;

  text-align: center;
  font-size: 14px;
  letter-spacing: -2%;
  color: var(--black_06);

  appearance: none;
  cursor: pointer;

  transition: all 0.1s ease-in-out;
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      margin-right: 8px;
    }
  }

  input {
    display: none;
    &:checked + p {
      .Happy {
        background-image: url(/img/common/review/happy_active.svg);
      }
      .Frown {
        background-image: url(/img/common/review/frown_active.svg);
      }
    }
  }
  &:has(input:checked) {
    /* border: none; */
    border-color: ${(props) => (props.htmlFor === "Y" ? "#00DD6D" : "#FF3F02")};
    background-color: ${(props) =>
      props.htmlFor === "Y" ? "#00DD6D" : "#FF3F02"};
    color: white;
  }
`;
