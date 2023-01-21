import styled from "styled-components";

const Main = styled.main`
  overflow: auto;
  height: calc(100vh - 61px);
  background-color: var(--bg);
`;

const Terms = styled.ul`
  margin-top: 22px;
  margin-bottom: 47px;
  li {
    margin-bottom: 15px;
  }
`;

export type activeProps = {
  active: boolean;
};

const SignButton = styled.button`
  background-color: ${(props: activeProps) =>
    props.active === true ? "var(--primary)" : "var(--disabled)"} !important;
  pointer-events: ${(props: activeProps) =>
    props.active === true ? "unset" : "none"};
  color: ${(props: activeProps) =>
    props.active === true ? "#fff" : "var(--black_05)"} !important; ;
`;

const RegisterFormWrap = styled.div`
  width: calc(100% - 32px);
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
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
`;
export type checkPassProps = {
  checkPass?: boolean;
};
const InputBox = styled.div`
  position: relative;
  margin-bottom: 8px;
  transition: all 0.3s ease;
  input {
    pointer-events: ${(props: checkPassProps) =>
      props.checkPass === false ? "none" : "unset"};
    opacity: ${(props: checkPassProps) =>
      props.checkPass === false ? "0.5" : "1"};

    /* background-color: #111; */
  }
`;

export type textProps = {
  state?: boolean;
};

const RegisterInfoText = styled.div`
  position: relative;
  height: 20px;
  left: 0px;
  padding-left: 24px;
  font-size: 0.875rem;
  line-height: 20px;
  color: var(--success);
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  p {
    transition: all 0.3s ease-in-out;
    position: absolute;
    top: ${(props: textProps) => (props.state === false ? "-20px" : "0")};
  }
  &::before {
    content: "";
    position: absolute;
    left: 0;
    width: 20px;
    height: 20px;
    background-image: url(/img/common/register/check_icon_green.svg);
    background-repeat: no-repeat;
    background-size: contain;

    transition: all 0.3s ease-in-out;
    top: ${(props: textProps) => (props.state === false ? "-20px" : "0")};
  }
`;

const SpaceTopWrap = styled.div`
  margin-top: 26px;
  position: relative;
`;

export {
  Main,
  Terms,
  RegisterFormWrap,
  PassCheckWrap,
  IconBox,
  InputBox,
  RegisterInfoText,
  SpaceTopWrap,
  SignButton,
};
