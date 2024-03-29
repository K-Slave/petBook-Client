import styled from "styled-components";

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

export { InfoText, LoginWrap, NotLogin, IconBox, InputBox };
