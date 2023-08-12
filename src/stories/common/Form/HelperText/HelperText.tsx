import React from "react";
import commonImg from "@image/commonImg";
import { HelperTextIconSpan, HelperTextP } from "./HelperText.style";

interface Props {
  status: "idle" | "loading" | "success" | "error";
  message: {
    success?: string;
    error?: string;
    loading?: string;
  };
}

const HelperText = ({ status, message }: Props) => {
  if (status === "error") {
    return (
      <HelperTextP status={status}>
        <HelperTextIconSpan
          url={commonImg.error_helper}
          width="14px"
          height="14px"
        />
        {message.error}
      </HelperTextP>
    );
  }

  return null;
};

export default HelperText;
