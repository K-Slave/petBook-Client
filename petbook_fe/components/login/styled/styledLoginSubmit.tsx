import styled from "styled-components";

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
      background-color: var(--main);
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
  background-color: var(--main);
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
  margin-top: 28px;
  text-align: center;
  p {
    display: inline;
    font-size: 18px;
  }
  a {
    display: inline;
    padding: 0;
    margin-left: 8px;
    font-size: 18px;
    font-weight: 400;
    color: #111;
    text-decoration: underline;
  }
`;

const LoginWrap = styled.div`
  position: relative;
  width: 679px;
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
export { ButtonBox, Container, PassGuide, LoginWrap, NotLogin };
