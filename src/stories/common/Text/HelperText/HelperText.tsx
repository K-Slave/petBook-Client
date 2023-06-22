import React from "react";

interface Props {
  status: "idle" | "loading" | "success" | "error";
  message: string;
}

const HelperText = ({ status, message }: Props) => {
  if (status === "error") {
    return <p>{message}</p>;
  }
  return <></>;
};

export default HelperText;
