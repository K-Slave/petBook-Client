import React, { PropsWithChildren } from "react";
import { FormModuleWrapDiv } from "./FormModuleWrap.style";
import layoutCalculator from "@lib/utils/layoutCalculator";
interface Props {
  width: string;
}

const FormModuleWrap = ({ children, width }: PropsWithChildren<Props>) => {
  const convWidth = layoutCalculator(width);

  return <FormModuleWrapDiv width={convWidth}>{children}</FormModuleWrapDiv>;
};

export default FormModuleWrap;
