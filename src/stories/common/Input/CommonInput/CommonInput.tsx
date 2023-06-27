import React from "react";
import StyledCommonInput from "./CommonInput.style";
import { UseFormRegisterReturn } from "react-hook-form";
import layoutCalculator from "@lib/utils/layoutCalculator";

export interface CommonInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  type: "text" | "password" | "email" | "checkbox" | "radio" | "number";
  register?: UseFormRegisterReturn;
  width?: string;
  height?: string;
  placeholderColor?: string;
}

const CommonInput = (props: CommonInputProps) => {
  const convWidth = layoutCalculator(props.width || "");
  const convHeight = layoutCalculator(props.height || "");

  return (
    <StyledCommonInput
      placeholder={props.placeholder || "내용을 입력해주세요."}
      {...props}
      {...props.register}
      width={convWidth}
      height={convHeight}
    />
  );
};

export default CommonInput;
