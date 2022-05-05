import React, { PropsWithChildren } from "react";
import styled, { css } from "styled-components";

type ContentProps = {
  boxType: String;
  active: Boolean;
  content: any;
};

const boxStyle = css`
  padding: 7px 10px;
  border-radius: 8px;
  font-size: 1rem;
  background: #fff;
  box-shadow: 0px 3px 10px #00000030;
  color: #111;
  ul {
    li {
      padding: 3px 20px 5px;
      border-bottom: solid 1px #ddd;
      cursor: pointer;
      &:last-child {
        border-bottom: none;
      }
      &:hover {
      }
    }
  }
`;

const ListBox = styled.div`
  ${boxStyle}
  position: ${(props: ContentProps) =>
    props.boxType === "list" ? "absolute" : "relative"};
  visibility: ${(props: ContentProps) =>
    props.active === false ? "hidden" : "visible"};

  top: 54px;
  right: 12px;
  z-index: 1;
`;

export const Box = (props: PropsWithChildren<ContentProps>) => {
  //
  return props.boxType === "list" ? (
    <>
      <ListBox {...props}>
        {/* 추후에 상태값에 따라 아이템 넣기 */}
        <ul>
          <li>Log out</li>
          <li>my page</li>
        </ul>
      </ListBox>
    </>
  ) : (
    <>
      <ListBox {...props}>{props.content}</ListBox>
    </>
  );
};
