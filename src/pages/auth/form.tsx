import React, { useState } from "react";
import Button from "@/stories/common/Button";
import HelperText from "@/stories/common/Form/HelperText/HelperText";
import FocusBasedInputBox from "@/stories/common/Input/FocusBasedInputBox";

const ResetPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isValid, setIsValid] = useState(false);
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

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

    // 이메일 형식이 올바른 경우: 이메일 전송 논리 추가
    // 여기에 비밀번호 재설정 이메일 보내기 로직을 추가하세요
  };

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
