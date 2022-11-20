import styled from "styled-components";

const RegisterFormWrap = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  margin-top: 76px;
  margin-bottom: 87px;
  .Login_Title {
    margin-bottom: 40px;
  }
  > div {
    &:last-child {
      margin-bottom: 0;
    }
    &.flex {
      > div {
        width: 50%;
        &:first-child {
          margin-right: 9px;
        }
      }
    }
  }
  .box {
    position: relative;
    label {
      position: absolute;
      top: 50%;
      left: 30px;
      opacity: 68%;
      color: #000000;
      transform: translateY(-50%);
    }
    input {
      padding-left: 140px;
      line-height: 30px;
      &::placeholder {
        color: #b7b7b7;
      }
    }
  }
  .err_box {
    margin-top: 4px;
    font-size: 15px;
    font-weight: 300;
    color: #ff6e4e;
    line-height: 30px;
  }
`;

const PassCheckWrap = styled.ul`
  display: flex;
  margin-top: 12px;
  li {
    margin-right: 20px;
    input,
    progress {
      accent-color: green;
    }
    label {
      margin-left: 7px;
      color: #ccc4c2;
      &.active {
        color: #00cf46;
      }
    }
  }
`;

const IconBox = styled.div`
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
`;
const InputBox = styled.div`
  position: relative;
  margin-bottom: 52px;
`;

const RegisterInfoText = styled.p`
  position: absolute;
  left: 20px;
  top: 56px;
  font-size: 0.875rem;
  line-height: 20px;
  color: var(--success);
  &::before {
    content: "";
    position: absolute;
    left: -24px;
    width: 20px;
    height: 20px;
    background-image: url(/img/common/register/check_icon.svg);
    background-repeat: no-repeat;
    background-size: contain;
  }
`;

export { RegisterFormWrap, PassCheckWrap, IconBox, InputBox, RegisterInfoText };
