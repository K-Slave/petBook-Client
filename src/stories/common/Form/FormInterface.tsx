import React, { Fragment, ReactNode, useId, useState } from "react";
import FormInterfaceForm from "./FormInterface.style";

interface InputContent {
  label?: ReactNode;
  input: ReactNode;
}

interface Props {
  inputContentList: InputContent[];
}

const FormInterface = ({ inputContentList }: Props) => {
  //
  return (
    <FormInterfaceForm>
      {/* <FormInterface.List inputContentList={inputContentList} /> */}
      <button></button>
    </FormInterfaceForm>
  );
};

export default FormInterface;
