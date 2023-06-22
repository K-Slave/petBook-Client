import React from "react";
import { HelperTextIconSpan, HelperTextP } from "./HelperText.style";
import commonImg from "@image/commonImg";

interface Props {
  status: "idle" | "loading" | "success" | "error";
  message: string;
}

const HelperText = ({ status, message }: Props) => {
  if (status === "error") {
    return (
      <HelperTextP>
        <HelperTextIconSpan
          url={commonImg.error_helper}
          width="14px"
          height="14px"
        />
        {message}
      </HelperTextP>
    );
  }
  return <></>;
};

export default HelperText;
