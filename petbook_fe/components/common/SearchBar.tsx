import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

type ContentProps = {
  type: String;
};

const Bar = styled.div`
  float: ${(props: ContentProps) => (props.type === "map" ? "auto" : "right")};
  margin-top: 20px;
  display: flex;
  align-items: center;
  width: ${(props: ContentProps) => (props.type === "map" ? "100%" : "auto")};
  input {
    border: ${(props: ContentProps) =>
      props.type === "map" ? "solid 1px #f0892f" : "none"};
    width: 300px;
    margin-right: 10px;
  }
  svg {
    width: 20px;
    height: 18px;
  }
`;

const SearchBar = (props: PropsWithChildren<ContentProps> | any) => {
  return (
    <Bar {...props}>
      <input type="text" placeholder="애완동물의 종류를 입력해주세요" />

      <BsSearch />
    </Bar>
  );
};
export default SearchBar;
