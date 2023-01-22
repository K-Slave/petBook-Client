import styled, { css } from "styled-components";

const commonStyle = css`
  .Item_Content {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: var(--black_01);
  }
  .Item_Button_Box {
    display: flex;
    gap: 12px;
    align-items: center;
    justify-content: flex-end;
    margin-top: 32px;
  }
  .Item_Row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
  }
`;

export const QnaItemDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 38px;
  ${commonStyle};
`;

export const QnaItemBubble = styled.div<{ isEditing: "true" | "" }>`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 32px;
  padding: 28px 32px;
  background-color: #fff;
  border-radius: 16px;

  &:after {
    content: "";
    position: absolute;
    display: block;
    width: 0;
    z-index: 1;
    border-style: solid;
    border-color: transparent white;
    border-width: 20px 20px 20px 0;
    top: 50%;
    left: -20px;
    margin-top: -20px;
  }
  ${({ isEditing }) =>
    isEditing &&
    css`
      border: 1px solid var(--black_04);
      &:before {
        content: "";
        position: absolute;
        display: block;
        width: 0;
        z-index: 1;
        border-style: solid;
        border-color: transparent var(--black_04);
        border-width: 20px 20px 20px 0;
        top: 50%;
        left: -20.5px;
        margin-top: -20px;
      }
    `}

  div {
    margin: 0 !important;
  }
`;

const notChildStyle = css`
  background-color: #fff;
`;

const childStyle = css`
  background-color: #fcf9f4;
`;

export const NormalItemDiv = styled.div<{ isEditing: "true" | "" }>`
  width: 100%;
  padding: 28px 32px;
  display: flex;
  gap: 14px;
  background-color: white;
  border-radius: 16px;
  border: ${({ isEditing }) => isEditing && "1px solid var(--black_04)"};
  & > div {
    width: 100%;
  }
  ${commonStyle};
`;

export const commonButtonStyle = css`
  display: flex;
  align-items: center;
  font-size: 16px;
`;

export const ScrapButtonBox = styled.button<{ isScrap: string }>`
  ${commonButtonStyle};
  color: ${({ isScrap }) => (isScrap ? "var(--black_01)" : "var(--black_03)")};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  & > div {
    display: flex;
    align-items: center;
    align-self: flex-end;
    gap: 1rem;
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 70px !important;
      height: 20px;
      font-size: 0.8rem !important;
    }
  }
`;
