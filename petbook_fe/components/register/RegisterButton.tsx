import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { useSetResource } from "@lib/hooks/common/useResource";

import {
  registerFormState,
  validationRegisterState,
} from "@atoms/pageAtoms/login/userState";
import navigator from "@lib/modules/navigator";

import { ErrorResponse } from "@lib/API/petBookAPI/types/userRequest";

import { SignButton } from "./styled/styledRegisterForm";
import { REGISTER_CREATE } from "./RegisterForm";

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

  // 버튼 활성 구독상태 UI 적용
  useEffect(() => {
    console.log(registerForm);
    let newArr = Object.values(validationRegister);
    let active = newArr.every((el) => el === true);
    setValidation(active);
  }, [registerForm]);

  // data 구독상태
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
      onClick={Sign}
      type="button"
      className="Primary"
    >
      회원가입
    </SignButton>
  );
};

export default RegisterButton;
