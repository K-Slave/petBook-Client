import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const SimpleButtonA = styled.a`
  height: 100%;
  padding: 0 35px;

  transition: all 0.3s ease-in-out;

  font-size: 14px;
  font-weight: normal;
  color: #000;
  &:hover {
    font-weight: bold;
  }

  .Simple__Button__Text {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;

    white-space: nowrap;

    ${(props: SimpleButtonProps) =>
      props.isCurrentPage
        ? {
            fontWeight: "bold",
            color: "#FF2E00",
            borderBottom: "4px solid #ff2e00",
          }
        : ""}
  }
`;

type SimpleButtonProps = {
  isCurrentPage?: boolean;
};

const SimpleButton = (props: PropsWithChildren<SimpleButtonProps>) => {
  const { children } = props;

  return (
    <SimpleButtonA {...props}>
      <span className="Simple__Button__Text">{children}</span>
    </SimpleButtonA>
  );
};

SimpleButton.defaultProps = {
  isCurrentPage: undefined,
};

export default SimpleButton;
