import styled from "styled-components";

const Submitbutton = styled.button`
  margin-top: 64px;
  width: 100%;
  font-weight: bold;
  font-size: 18px;
  color: white;
  line-height: 52px;
  border-radius: 8px;
  background-color: #ff6847;
`;
const ButtonBox = styled.div`
  margin-top: 42px;
  a {
    display: block;
    width: 100%;
    padding: 20px 0;
    margin-bottom: 12px;
    border-radius: 12px;
    text-align: center;
    font-weight: 700;
    font-size: 20px;
    color: white;
    box-sizing: border-box;
    &:last-child {
      margin-bottom: 0;
    }
    &.email {
      padding: 28px 0;
      margin-bottom: 60px;
      background-color: var(--primary);
    }
    &.naver {
      background-color: #41d97e;
    }
    &.kakao {
      background-color: #ffc700;
    }
    &.google {
      background-color: #7270ff;
    }
  }
`;
const Container = styled.div`
  padding: 41px 35px;
  margin-top: 32px;
  border-radius: 20px;
  box-sizing: border-box;
  color: white;
  background-color: var(--primary);
  cursor: pointer;
  p {
    opacity: 0.7;
    margin-bottom: 6px;
    font-size: 16px;
    font-weight: 400;
  }
  h3 {
    font-size: 20px;
    font-weight: 700;
  }
`;

const PassGuide = styled.figure`
  margin-top: 20px;
  text-align: center;
  p {
    display: inline;
    font-size: 18px;
  }
  a {
    position: relative;
    display: inline-block;
    padding: 0 20px;
    font-size: 14px;
    color: #777774;
    &::after {
      content: "";
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 1px;
      height: 12px;
      background-color: #e0dfd9;
    }
    &:last-child {
      color: #ff6847;
      &::after {
        display: none;
      }
    }
  }
`;

const LoginWrap = styled.div`
  position: relative;
  width: 400px;
  margin: 0 auto;
  margin-top: 194px;
`;

const NotLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 55px;
  font-size: 20px;
  color: #b6b6b6;
  svg {
    margin-bottom: 25px;
    font-size: 55px;
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
  margin-bottom: 8px;
`;
const AutomaticLabel = styled.label`
  float: right;
  margin: 4px 0 35px;
`;

export {
  ButtonBox,
  Container,
  PassGuide,
  LoginWrap,
  NotLogin,
  Submitbutton,
  IconBox,
  InputBox,
  AutomaticLabel,
};
