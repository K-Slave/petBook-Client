import React from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

const Bar = styled.div`
  float: right;
  margin-top: 20px;
  display: flex;
  align-items: center;
  input {
    border: none;
    width: 300px;
    margin-right: 10px;
  }
  svg {
    width: 20px;
    height: 18px;
  }
`;

const SearchBar = () => {
  return (
    <Bar>
      <input type="text" placeholder="애완동물의 종류를 입력해주세요" />

      <BsSearch />
    </Bar>
  );
};
export default SearchBar;
