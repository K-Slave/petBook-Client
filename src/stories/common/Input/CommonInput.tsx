import React from "react";
import StyledCommonInput from "./CommonInput.style";

export interface CommonInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  type: "text" | "password" | "email";
}

const CommonInput = (props: CommonInputProps) => {
  return (
    <StyledCommonInput
      placeholder={props.placeholder || "내용을 입력해주세요."}
      {...props}
    />
  );
};

export default CommonInput;
