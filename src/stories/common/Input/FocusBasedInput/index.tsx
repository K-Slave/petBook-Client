import React, { PropsWithChildren } from "react";
import {
  FocusBasedAlginCenterLabel,
  FocusBasedBgSpan,
  FocusBasedInputElem,
} from "./style";
import { CommonInputProps } from "../CommonInput/CommonInput";

// 포커스 기반 비제어 컴포넌트
export interface FocusBasedInputProps extends CommonInputProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isTyping?: boolean;
  bgUrl?: string;
  bgWidth?: string;
  bgHeight?: string;
}

const FocusBasedInput = (props: PropsWithChildren<FocusBasedInputProps>) => {
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
      <FocusBasedInputElem
        {...inputProps}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        bgWidth={bgWidth}
        register={register}
      />
    </FocusBasedAlginCenterLabel>
  );
};

export default FocusBasedInput;
