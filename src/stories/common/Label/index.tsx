import React, { PropsWithChildren } from "react";
import { StyledCommonLabel } from "./style";

// Input 을 감싸기 위한 Label 컴포넌트

type Props = React.LabelHTMLAttributes<HTMLLabelElement>;

const CommonLabel = (props: PropsWithChildren<Props>) => {
  return <StyledCommonLabel {...props}>{props.children}</StyledCommonLabel>;
};

export default CommonLabel;
