import React from "react";
import styled from "styled-components";

const ResponsiveBlock = styled.div`
  padding-left: 4.167vw;
  padding-right: 4.167vw;
`;

const Responsive = ({ children, ...rest }: any) => {
  // style, className, onClick, onMouseMove 등의 props를 사용할 수 있도록
  // ...rest를 사용하여 ResponsiveBlock에게 전달
  return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
};

export default Responsive;
