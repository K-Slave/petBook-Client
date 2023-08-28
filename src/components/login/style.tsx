import styled from "styled-components";

const Submitbutton = styled.button`
  margin-top: 64px;
  width: 100%;
  font-weight: bold;
  font-size: 18px;
  color: white;
  line-height: 52px;
  border-radius: 0.5rem;
  background-color: var(--primary);
`;
const SocialLoginButton = styled.button`
  a {
    display: block;
    margin: 0 2.3438rem;
    padding: 0.875rem 0;

    border-radius: 0.5rem;

    text-align: center;
    font-weight: 700;
    font-size: 1rem;
    color: white;

    box-sizing: border-box;

    &:last-child {
      margin-bottom: 0.75rem;
    }
    &.email {
      padding: 28px 0;
      margin-bottom: 60px;
      background-color: var(--primary);
    }
    &.defaultEmail {
      background-color: var(--primary);
    }
    &.naver {
      background-color: #41d97e;
    }
    &.kakao {
      display: flex;
      justify-content: center;
      align-items: center;

      background-color: #ffb039;
    }
    &.google {
      background-color: #7270ff;
    }

    .kakaoIcon {
      margin: 0.125rem 0.25rem 0;
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
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
`;
const InputBox = styled.div`
  position: relative;
  margin-bottom: 8px;
`;
const AutomaticLabel = styled.label`
  float: right;
  margin: 14px 0 35px;
`;
interface Props {
  errorState: boolean;
}
const InfoText = styled.p<Props>`
  position: absolute;
  left: 24px;
  display: ${(p) => (p.errorState === false ? "none" : "inline-block")};
  margin-top: 4px;
  font-size: 0.875rem;
  color: var(--error);
  line-height: 20px;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -26px;
    width: 20px;
    height: 20px;
    background-image: url(/img/common/register/error_icon.svg);
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

export {
  SocialLoginButton,
  Container,
  PassGuide,
  LoginWrap,
  NotLogin,
  Submitbutton,
  IconBox,
  InputBox,
  AutomaticLabel,
  InfoText,
};
