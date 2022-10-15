import Link from "next/link";
import styled from "styled-components";

const Main = styled.main`
  padding-top: 198px;
  height: calc(100vh - 61px);
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--bg);

  input {
    max-width: 412px;
    margin-bottom: 42px;
    height: 64px;
    padding: 20px;
    text-align: center;
  }
`;
const InfoWrap = styled.section`
  text-align: center;
  p {
    font-size: 20px;
    margin-bottom: 12px;
  }
  h4 {
    margin-top: 12px;
    font-size: 28px;
    margin-bottom: 42px;
  }
`;
const LinkWrap = styled.div`
  width: 100%;
  max-width: 412px;
  text-align: center;
  a {
    padding: 20px 0;
    border-radius: 12px;
    font-size: 20px;
    width: 100%;
    color: white;
    font-weight: bold;
    display: block;
    &:first-child {
      background-color: var(--main);
      margin-bottom: 12px;
    }
    &:last-child {
      background-color: #111;
    }
  }
`;
const Password = () => {
  return (
    <>
      <Main>
        <InfoWrap>
          <p>이미 가입한 이력이 있어요</p>
          <h4>이전 가입한 이메일을 확인해주세요</h4>
        </InfoWrap>
        <input type="text" />
        <LinkWrap>
          <Link href={"/login"}>기존 아이디로 로그인하기</Link>
          <Link href={"/"}>홈으로</Link>
        </LinkWrap>
      </Main>
    </>
  );
};
export default Password;
