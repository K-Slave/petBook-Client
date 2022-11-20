import React, { PropsWithChildren, useEffect, useState } from "react";
import styled from "styled-components";

const PersonalMenuA = styled.a`
  /* position: relative;
  left: 35px; */

  height: 100%;
  padding: 0 35px;

  transition: all 0.3s ease-in-out;

  font-size: 0.875rem;
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

const PersonalMenu = React.forwardRef(
  (props: PropsWithChildren<SimpleButtonProps>, ref) => {
    const { children } = props;

    return (
      <PersonalMenuA {...props}>
        <span className="Simple__Button__Text">{children}</span>
      </PersonalMenuA>
    );
  }
);

PersonalMenu.defaultProps = {
  isCurrentPage: undefined,
};

export default PersonalMenu;
