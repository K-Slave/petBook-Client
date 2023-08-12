import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import Button from "@/stories/common/Button";
import { registerFormState } from "@atoms/pageAtoms/login/userState";
import { ErrorResponse } from "@lib/API/petBookAPI/types/userRequest";
import { useSetResource } from "@lib/hooks/common/useResource";
import navigator from "@lib/modules/navigator";
import { REGISTER_CREATE } from "./RegisterForm";

const RegisterButton = () => {
  const registerForm = useRecoilValue(registerFormState);
  const { data, isSuccess, isError, error, mutate } =
    useSetResource(REGISTER_CREATE);
  const [validation, setValidation] = useState(false);

  const Sign = () => {
    const { password_check, name, agree, ...newObj } = registerForm;
    mutate(newObj);
  };

  // 버튼 활성 구독상태 UI 적용
  useEffect(() => {
    const newArr = Object.values(registerForm);
    const active = newArr.every((x) => x !== null && x !== "");
    setValidation(active);
  }, [registerForm]);

  // data 구독상태
  useEffect(() => {
    if (isSuccess) {
      navigator({ url: "/auth" });
      // mutate({
      //   email: registerForm.email,
      //   password: registerForm.password,
      // });
    }
    if (isError) {
      const errorObj = error as ErrorResponse;
      alert(errorObj.response.data.message);
    }
  }, [isError, data]);

  return (
    <Button disabled={!validation} onClick={Sign} variant="primary">
      회원가입
    </Button>
  );
};

export default RegisterButton;
