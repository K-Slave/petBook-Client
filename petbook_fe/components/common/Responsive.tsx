import React from "react";
import styled from "styled-components";

// 헤더 등 전체 UI 컨테이너 쪽에 적용하는 반응형 스타일 블록

const ResponsiveBlock = styled.div`
  padding-left: 3rem;
  padding-right: 3rem;
  width: 100%;
  margin: 0 auto;

  /* 브라우저 크기에 따라 가로 사이즈 변경 */
  @media screen and (max-width: 1024px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  @media screen and (max-width: 600px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const Responsive = ({ children, ...rest }: any) => {
  // style, className, onClick, onMouseMove 등의 props를 사용할 수 있도록
  // ...rest를 사용하여 ResponsiveBlock에게 전달
  return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
};

export default Responsive;
