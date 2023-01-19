import { useRecoilValue } from "recoil";
import { useEffect, useState } from "react";
import Image from "next/image";

// custom
import { createRequest, useSetResource } from "@lib/hooks/common/useResource";
import { registerRequest } from "@lib/API/petBookAPI";
import {
  registerFormState,
  validationRegisterState,
} from "@atoms/pageAtoms/login/userState";
import navigator from "@lib/modules/navigator";

import RegisterInputBox from "@components/register/RegisterInputBox";
import PasswordInput from "@components/register/RegisterPasswordFrom";
import RegisterNameForm from "@components/register/RegisterNameForm";
import RegisterTerms from "@components/register/RegisterTerms";

// type
import { ErrorResponse } from "@lib/API/petBookAPI/types/userRequest";

// styled
import {
  Main,
  RegisterFormWrap,
  SpaceTopWrap,
  RegisterInfoText,
  SignButton,
} from "./styled/styledRegisterForm";

// reponse 정의
const REGISTER_CREATE = createRequest({
  key: ["REGISTER_CREATE"],
  requester: registerRequest.register,
});
export const REGISTER_CHECK_EMAIL = createRequest({
  key: ["REGISTER_CHECK_EMAIL"],
  requester: registerRequest.registerCheckEmail,
});
export const REGISTER_CHECK_NICKNAME = {
  key: ["REGISTER_CHECK_NICKNAME"],
  requester: registerRequest.registerCheckNickname,
};

const RegisterContainer = () => {
  return (
    <Main>
      <RegisterFormWrap>
        <RegisterContainer.Register />
        <RegisterContainer.TermsWrap />
        <RegisterContainer.RegisterButton />
      </RegisterFormWrap>
    </Main>
  );
};

const Register = () => {
  // const setRegisterForm = useSetRecoilState(registerFormState);
  return (
    <div>
      <div className="Login_Title">
        <Image
          src="/img/common/logo/logo.svg"
          alt="Picture of the author"
          width={160}
          height={27}
        />
      </div>
      <div>
        <RegisterInputBox
          IconType="Login"
          axiosValue="email"
          current="이메일을 입력해주세요"
        />
        {/* <RegisterInputBox
            IconType="Login_Passcode_Disabled"
            axiosValue="email_num"
            current="인증번호 4자리"
          /> */}
        <RegisterInfoText state={false}>
          <p>인증이 완료되었습니다</p>
        </RegisterInfoText>
      </div>
      <SpaceTopWrap>
        <PasswordInput />
      </SpaceTopWrap>
      <SpaceTopWrap>
        <RegisterNameForm />
      </SpaceTopWrap>
    </div>
  );
};
const RegisterButton = () => {
  const registerForm = useRecoilValue(registerFormState);
  const validationRegister = useRecoilValue(validationRegisterState);
  const [validation, setValidation] = useState(false);

  const { data, isSuccess, isError, error, mutate } =
    useSetResource(REGISTER_CREATE);

  const Sign = () => {
    const { password_check, name, ...newObj } = registerForm;

    mutate(newObj);
  };
  useEffect(() => {
    let newArr = Object.values(validationRegister);
    let active = newArr.every((el) => el === true);
    setValidation(active);
  }, [validationRegister]);

  useEffect(() => {
    if (isSuccess) {
      navigator({ url: "/login" });
    }
    if (isError) {
      const errorObj = error as ErrorResponse;
      alert(errorObj.response.data.message);
    }
  }, [isError, data]);

  return (
    <SignButton
      active={validation}
      type="button"
      onClick={Sign}
      className="Primary"
    >
      회원가입
    </SignButton>
  );
};

RegisterContainer.Register = Register;
RegisterContainer.TermsWrap = RegisterTerms;
RegisterContainer.RegisterButton = RegisterButton;

export default RegisterContainer;
