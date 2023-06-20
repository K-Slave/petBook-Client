import React from "react";
import StyledCommonInput from "./CommonInput.style";
import { UseFormRegisterReturn } from "react-hook-form";
import localConsole from "@lib/utils/localConsole";

export interface CommonInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  type: "text" | "password" | "email";
  width?: string;
  height?: string;
  register?: UseFormRegisterReturn;
}

const CommonInput = (props: CommonInputProps) => {
  return (
    <StyledCommonInput
      placeholder={props.placeholder || "내용을 입력해주세요."}
      {...props.register}
      {...props}
    />
  );
};

export default CommonInput;
