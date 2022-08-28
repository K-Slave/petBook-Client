import { useRouter } from "next/router";
import SocialLogin from "../components/SocialLogin";
import styled from "styled-components";
import { BsCheckCircleFill } from "react-icons/bs";

const Main = styled.main`
  height: 55vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 7.5rem;
  h1 {
    font-size: 25px;
    font-weight: normal;
    margin-bottom: 40px;
  }
`;

const NotLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #b6b6b6;
  font-size: 20px;
  margin-bottom: 55px;
  svg {
    font-size: 55px;
    margin-bottom: 25px;
  }
`;

const Login = () => {
  const router = useRouter();
  const isRedirect = router.query.redirect;
  return (
    <>
      {/* <HtmlHeader /> */}
      {/* <TopNav /> */}
      <Main>
        {isRedirect ? (
          <NotLogin>
            <BsCheckCircleFill />
            <p>로그인이 필요한 서비스입니다.</p>
          </NotLogin>
        ) : (
          <h1>소셜 로그인</h1>
        )}
        <SocialLogin />
      </Main>
    </>
  );
};

export default Login;
