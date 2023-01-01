import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { useEffect } from "react";
import Image from "next/image";

import { createRequest, useSetResource } from "@lib/hooks/common/useResource";
import { registerRequest } from "@lib/API/petBookAPI";
import { registerFormState } from "@atoms/pageAtoms/login/userState";

import navigator from "@lib/modules/navigator";

import RegisterInputBox from "@components/register/RegisterInputBox";
import PasswordInput from "@components/register/RegisterPasswordFrom";

// styled
import { RegisterFormWrap } from "./styled/styledRegisterForm";

const Main = styled.main`
  overflow: auto;
  height: calc(100vh - 61px);
  background-color: var(--bg);
`;

const Terms = styled.ul`
  margin-top: 62px;
  margin-bottom: 47px;
  li {
    margin-bottom: 15px;
  }
`;

const REGISTER_CREATE = createRequest({
  key: "REGISTER_CREATE",
  requester: registerRequest.register,
});

// 내부에서 쓰일거임
export const REGISTER_CHECK_EMAIL = createRequest({
  key: "REGISTER_CHECK_EMAIL",
  requester: registerRequest.registerCheckEmail,
});

const TermsWrap = () => {
  return (
    <Terms>
      <li>
        <div>
          <label htmlFor="terms">
            <input type="checkbox" id="terms" />
            <p>펫북 이용 약관에 동의합니다 [필수]</p>
          </label>
        </div>
      </li>
      <li>
        <div>
          <label htmlFor="privacy">
            <input type="checkbox" id="privacy" />
            <p>개인정보 수집 및 이용에 동의합니다 [필수]</p>
          </label>
        </div>
      </li>
    </Terms>
  );
};

const Register = () => {
  // const setRegisterForm = useSetRecoilState(registerFormState);

  return (
    <div>
      <RegisterFormWrap>
        <div className="Login_Title">
          <Image
            src="/img/common/logo/logo.svg"
            alt="Picture of the author"
            width={160}
            height={27}
          />
        </div>
        <RegisterInputBox
          IconType="Login"
          axiosValue="email"
          current="이메일"
          registerInfoText="인증번호 4자리"
        />
        <PasswordInput />
        <RegisterInputBox
          IconType="Nicname"
          axiosValue="nickname"
          current="닉네임"
          registerInfoText="이름"
        />
        <RegisterContainer.TermsWrap />
        <RegisterContainer.RegisterButton />
      </RegisterFormWrap>
    </div>
  );
};

const RegisterButton = () => {
  const user = useRecoilValue(registerFormState);

  const { data, isSuccess, isError, error, mutate } =
    useSetResource(REGISTER_CREATE);

  const Sign = () => {
    mutate(user);
  };
  useEffect(() => {
    if (isSuccess) {
      navigator("/info");
    }
    if (isError) {
      // 린트에러 unknown 타입
      // alert(error.response.data.message);
    }
  }, [isError, data]);

  return (
    <button type="button" onClick={Sign} className="Primary">
      회원가입 완료
    </button>
  );
};

const RegisterContainer = () => {
  return (
    <Main>
      <RegisterContainer.Register />
    </Main>
  );
};

RegisterContainer.Register = Register;
RegisterContainer.TermsWrap = TermsWrap;
RegisterContainer.RegisterButton = RegisterButton;

export default RegisterContainer;
