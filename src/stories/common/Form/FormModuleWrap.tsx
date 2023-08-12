import React, { PropsWithChildren } from "react";
import layoutCalculator from "@lib/utils/layoutCalculator";
import { FormModuleWrapDiv } from "./FormModuleWrap.style";
interface Props {
  width: string;
}

const FormModuleWrap = ({ children, width }: PropsWithChildren<Props>) => {
  const convWidth = layoutCalculator(width);

  return <FormModuleWrapDiv width={convWidth}>{children}</FormModuleWrapDiv>;
};

export default FormModuleWrap;
