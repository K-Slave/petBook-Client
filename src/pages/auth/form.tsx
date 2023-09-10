import React, { useEffect, useState } from "react";
import Button from "@/stories/common/Button";
import HelperText from "@/stories/common/Form/HelperText/HelperText";
import FocusBasedInputBox from "@/stories/common/Input/FocusBasedInputBox";
import { userRegistrationRequest } from "@lib/API/petBookAPI";
import { ErrorResponse } from "@lib/API/petBookAPI/types/userRequest";
import { useSetResource } from "@lib/hooks/common/useResource";

export const REGISTER_CHECK_EMAIL = {
  key: ["REGISTER_CHECK_EMAIL"],
  requester: userRegistrationRequest.registerCheckEmail,
};

const ResetPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isValid, setIsValid] = useState(false);
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const { data, isSuccess, isError, error, mutate } =
    useSetResource(REGISTER_CHECK_EMAIL);

  const handleButtonClick = () => {
    if (!email) {
      setErrorMessage("이메일을 입력해주세요.");
      return;
    }

    if (!emailRegex.test(email)) {
      setErrorMessage("이메일 형식이 올바르지 않습니다.");
      return;
    }

    setErrorMessage("");
    setIsValid(true);

    mutate({ email: email });
  };

  useEffect(() => {
    if (isSuccess) {
      alert(data.toString() + "test..");
    }
    if (isError) {
      const errorObj = error as ErrorResponse;
      alert(error);
      alert(errorObj.response.data.message);
    }
  }, [isSuccess, isError, data, error]);

  return (
    <>
      <FocusBasedInputBox
        type="email"
        placeholder="이메일"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setErrorMessage("");
        }}
        onConfirmClick={() => {
          handleButtonClick();
        }}
      />

      <div
        style={{
          height: "2rem",
          marginTop: "-0.5rem",
        }}
      >
        <HelperText
          message={{
            error: errorMessage || " ",
          }}
          status={errorMessage ? "error" : "idle"}
        />
      </div>

      <Button
        variant={"primary"}
        bgColor={isValid ? "#FF6847" : "#E0DFD9"}
        color={isValid ? "#F8F7F2" : "#AAAAA7"}
        disabled={!isValid}
      >
        비밀번호 재설정 이메일 보내기
      </Button>
    </>
  );
};

export default ResetPasswordForm;
