import HtmlHeader from "../components/common/HtmlHeader";
import Keyvisual from "../components/Keyvisual";
import TopNav from "../components/TopNav";
import styled from "styled-components";

const Main = styled.main`
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 7rem;
  h1 {
    font-size: 25px;
    font-weight: normal;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 40px;
`;

const Icon = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  cursor: pointer;
  object-fit: cover;
`;

const BACKEND_BASE_URL = "https://shrouded-falls-39042.herokuapp.com";

const Login = () => {
  return (
    <>
      <HtmlHeader />
      <TopNav />
      <Keyvisual />
      <Main>
        <h1>소셜 로그인</h1>
        <ButtonBox>
          <a href={`${BACKEND_BASE_URL}/kakao/login`}>
            <Icon src="./img/kakao-icon.png" alt="kakao icon" />
          </a>
          <a href={`${BACKEND_BASE_URL}/naver/login`}>
            <Icon src="./img/naver-icon.png" alt="naver icon" />
          </a>
          <a href={`${BACKEND_BASE_URL}/google/login`}>
            <Icon src="./img/google-icon.png" alt="google icon" />
          </a>
        </ButtonBox>
      </Main>
    </>
  );
};

export default Login;
