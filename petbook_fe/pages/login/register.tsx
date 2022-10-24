import HtmlHeader from "@components/common/HtmlHeader";
import TopNav from "@components/TopNav";
import ValidationInput from "@components/common/ValidationInput";

//
import styled from "styled-components";

//
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import PasswordInput from "@components/register/PasswordInput";

const Main = styled.main`
  height: calc(100vh - 61px);
  overflow: auto;
  background-color: var(--bg);
  .formWrap {
    max-width: 679px;
    width: 100%;
    margin: 0 auto;
    margin-top: 76px;
    margin-bottom: 87px;
    > div {
      margin-bottom: 26px;
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
        transform: translateY(-50%);
        color: #000000;
        opacity: 68%;
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
      color: #ff6e4e;
      font-size: 15px;
      font-weight: 300;
      line-height: 30px;
      margin-top: 4px;
    }

    &.small {
      max-width: 520px;
      text-align: center;
      p {
        font-size: 20px;
        margin-bottom: 14px;
      }
      h3 {
        margin-bottom: 55px;
        font-size: 28px;
      }
      .submit_sucess_img {
        height: 297px;
        width: 100%;
        margin-bottom: 28px;
        background-color: var(--test);
      }
    }
  }
`;

const SubmitBtn = styled.div`
  width: 100%;
  margin: 60px 0 0;
  display: block;
  padding: 20px 0;
  text-align: center;
  font-weight: 700;
  font-size: 20px;
  color: white;
  border-radius: 12px;
  box-sizing: border-box;
  background-color: var(--main);
  cursor: pointer;
`;

const Register = () => {
  const router = useRouter();
  const [signActive, setSignActive] = useState(false);

  const Sign = () => {
    console.log("sign");
  };

  //recoil
  useEffect(() => {
    if (router.query.state === "true") {
      setSignActive(true);
    }
  }, [router]);

  return (
    <>
      <HtmlHeader />
      <TopNav />
      <Main>
        {signActive ? (
          <div className="formWrap small">
            <p>회원가입 완료!</p>
            <h3>
              지금부터 우리 동물 관리는 <br /> 펫북과 함께해요!
            </h3>
            <div className="submit_sucess_img"></div>
            <div className="main_color_button" onClick={() => router.push("/")}>
              홈으로
            </div>
          </div>
        ) : (
          <div className="formWrap">
            <ValidationInput axiosValue={"email"} current={"이메일"} />
            <ValidationInput current={"이메일 확인"} />
            <PasswordInput />
            <ValidationInput axiosValue={"nicName"} current={"닉네임"} />
            <SubmitBtn onClick={Sign} className="submitBtn">
              회원가입
            </SubmitBtn>
          </div>
        )}
      </Main>
    </>
  );
};
export default Register;
