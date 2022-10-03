import React from "react";
import WriteForm from "../components/write/WriteForm";
import WriteHashTags from "../components/write/WriteHashTags";
import WriteImgSubmit from "../components/write/WriteImgSubmit";
import WriteSubmit from "../components/write/WriteSubmit";

const WriteContainer = () => {
  return (
    <>
      <WriteForm />
      <WriteImgSubmit />
      <WriteHashTags />
      <WriteSubmit />
    </>
  );
};

export default React.memo(WriteContainer);
