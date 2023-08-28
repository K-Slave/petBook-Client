import styled from "styled-components";

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

interface Props {
  errorState: boolean;
}
const InfoText = styled.p<Props>`
  position: absolute;
  left: 1.5rem;
  display: ${(p) => (p.errorState === false ? "none" : "inline-block")};
  margin-top: 0.25rem;
  font-size: 0.875rem;
  color: var(--error);
  line-height: 1.25rem;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: --1.625rem;
    width: 1.25rem;
    height: 1.25rem;
    background-image: url(/img/common/register/error_icon.svg);
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

export { SocialLoginButton, InfoText, LoginWrap, NotLogin };
