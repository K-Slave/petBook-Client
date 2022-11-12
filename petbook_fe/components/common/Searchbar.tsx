import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

type ContentProps = {
  type: string;
};

const Bar = styled.div`
  float: right;
  margin-top: 20px;
  display: flex;
  align-items: center;
  input {
    border: "none";
    width: 300px;
    margin-right: 10px;
  }
  svg {
    width: 20px;
    height: 18px;
  }
`;

const MapBar = styled.div`
  width: 100%;
  input {
    border: solid 2px var(--main);
    font-size: 16px;
    border-radius: 10px;
    padding: 13px 0 14px 53px;
    &::placeholder {
      color: var(--main);
      opacity: 0.6;
    }
  }
`;

const SearchBar = (props: PropsWithChildren<ContentProps>) => {
  const { type } = props;
  const isMapType = type === "map";

  return (
    <>
      {isMapType ? (
        <MapBar>
          <input type="text" placeholder="애완동물의 종류를 입력해주세요" />
        </MapBar>
      ) : (
        <Bar>
          <input type="text" placeholder="애완동물의 종류를 입력해주세요" />
          <BsSearch />
        </Bar>
      )}
    </>
  );
};
export default SearchBar;
