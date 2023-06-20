import React, { PropsWithChildren } from "react";
import {
  FocusBasedAlginCenterLabel,
  FocusBasedBgSpan,
  FocusBasedInputBoxElem,
} from "./style";
import { CommonInputProps } from "../CommonInput/CommonInput";

// 포커스 기반 Input Box
// Label 태그로 감싸져 있음
export interface FocusBasedInputBoxProps extends CommonInputProps {
  inputRef?: React.RefObject<HTMLInputElement>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isTyping?: boolean;
  bgUrl?: string;
  bgWidth?: string;
  bgHeight?: string;
}

const FocusBasedInputBox = (
  props: PropsWithChildren<FocusBasedInputBoxProps>
) => {
  const { children, type, bgUrl, bgWidth, bgHeight, register, onChange } =
    props;
  const inputProps = { ...props };
  delete inputProps.children;

  const onBlur: React.FocusEventHandler<HTMLInputElement> = (e) => {
    if (e.target.validity.valid) {
      e.target.classList.add("valid");
    } else if (!e.target.validity.valid && e.target.value.length > 0) {
      e.target.classList.add("invalid");
    }
  };

  const onFocus: React.FocusEventHandler<HTMLInputElement> = (e) => {
    e.target.classList.remove("valid");
    e.target.classList.remove("invalid");
  };

  return (
    <FocusBasedAlginCenterLabel>
      {children}
      {bgUrl && (
        <FocusBasedBgSpan
          url={bgUrl || ""}
          width={bgWidth || "1rem"}
          height={bgHeight || "1rem"}
        />
      )}
      <FocusBasedInputBoxElem
        {...inputProps}
        type={type}
        onChange={register ? register.onChange : onChange}
        onBlur={register ? register.onBlur : onBlur}
        onFocus={onFocus}
        bgWidth={bgWidth}
        register={register}
      />
    </FocusBasedAlginCenterLabel>
  );
};

export default FocusBasedInputBox;
