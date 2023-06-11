import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const StyledCommonLabel = styled.label`
  position: relative;
  display: block;
  width: 100%;
`;

interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {
  temp?: string;
}

const CommonLabel = (props: PropsWithChildren<Props>) => {
  return <StyledCommonLabel {...props}>{props.children}</StyledCommonLabel>;
};

export default CommonLabel;
