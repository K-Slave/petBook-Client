import ValidationInput from "@components/common/ValidationInput";
import PasswordInput from "@components/register/PasswordInput";

import styled from "styled-components";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";

import { createRequest, useSetResource } from "@lib/hooks/useResource";
import { registerRequest } from "@lib/API/petBookAPI";
import { userState } from "@atoms/pageAtoms/login/userState";

const Main = styled.main`
  overflow: auto;
  height: calc(100vh - 61px);
  background-color: var(--bg);
  .formWrap {
    width: 100%;
    max-width: 679px;
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
        opacity: 68%;
        color: #000000;
        transform: translateY(-50%);
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
      margin-top: 4px;
      font-size: 15px;
      font-weight: 300;
      color: #ff6e4e;
      line-height: 30px;
    }

    &.small {
      max-width: 520px;
      text-align: center;
      p {
        margin-bottom: 14px;
        font-size: 20px;
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
  display: block;
  margin: 60px 0 0;
  padding: 20px 0;
  border-radius: 12px;
  text-align: center;
  font-weight: 700;
  font-size: 20px;
  color: white;
  box-sizing: border-box;
  background-color: var(--main);
  cursor: pointer;
`;

const Register = () => {
  const user = useRecoilValue(userState);
  const REGISTER_CREATE = createRequest({
    key: "REGISTER_CREATE",
    requester: registerRequest.register,
  });

  const router = useRouter();
  const [signActive, setSignActive] = useState(false);

  const { data, isLoading, isError, isSuccess, mutate } =
    useSetResource(REGISTER_CREATE);

  const Sign = () => {
    mutate(user);
  };

  useEffect(() => {
    if (router.query.state === "true") {
      setSignActive(true);
    }
  }, [router]);

  useEffect(() => {
    if (isSuccess === true) {
      router.push("/register?state=true");
    }
  }, [data]);

  return (
    <>
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
            <ValidationInput axiosValue={""} current={"이메일 확인"} />
            <PasswordInput />
            <ValidationInput axiosValue={"nickname"} current={"닉네임"} />
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
