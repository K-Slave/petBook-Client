import { useRouter } from "next/router";
import Link from "next/link";
import HtmlHeader from "@components/common/HtmlHeader";

//
import SocialLogin from "@components/login/SocialLogin";
import EmailLogin from "@components/login/EmailLogin";

//
import styled from "styled-components";
import { BsCheckCircleFill } from "react-icons/bs";
import InduceSign from "@components/login/InduceSign";
import TopNav from "@components/TopNav";

const Main = styled.main`
  height: calc(100vh - 61px);
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--bg);
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

const LoginWrap = styled.div`
  width: 679px;
  position: relative;
  margin: 0 auto;
  margin-top: 194px;
  figure.pass_guide {
    text-align: center;
    margin-top: 28px;
    p {
      display: inline;
      font-size: 18px;
    }
    a {
      margin-left: 8px;
      padding: 0;
      display: inline;
      font-size: 18px;
      font-weight: 400;
      color: #111;
      text-decoration: underline;
    }
  }
  a {
    width: 100%;
    display: block;
    padding: 20px 0;
    text-align: center;
    font-weight: 700;
    font-size: 20px;
    border-radius: 12px;
    margin-bottom: 12px;
    box-sizing: border-box;
    color: white;
    &:last-child {
      margin-bottom: 0;
    }
    &.email {
      padding: 28px 0;
      background-color: var(--main);
      margin-bottom: 60px;
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

const Login = () => {
  const router = useRouter();

  const isRedirect = router.query.redirect;
  return (
    <>
      <HtmlHeader />
      <TopNav />
      <Main>
        <LoginWrap>
          {isRedirect ? (
            <NotLogin>
              <BsCheckCircleFill />
              <p>로그인이 필요한 서비스입니다.</p>
            </NotLogin>
          ) : isRedirect === undefined ? (
            <>
              <div className="login_title">
                <p>이색동물 유저들의 소통공간, Petbook</p>
                <h2>로그인 후 다양한 콘텐츠를 즐겨보세요!</h2>
              </div>
              <SocialLogin />
              <InduceSign />
              <figure className="pass_guide">
                <p>비밀번호를 잊으셨나요?</p>
                <Link href={"/password"}>비밀번호 찾기</Link>
              </figure>
            </>
          ) : (
            <>
              <h2>로그인 완료 / 홈으로 이동</h2>
            </>
          )}
        </LoginWrap>
      </Main>
    </>
  );
};

export default Login;
