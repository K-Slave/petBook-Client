import { PropsWithChildren } from "react";
import { BsSearch } from "react-icons/bs";
import styled from "styled-components";

const SearchButtonA = styled.a`
  position: relative;
  left: 35px;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  min-width: 20px;
  height: 100%;

  padding: 0 35px;

  .Search__Button__Icon {
    min-width: 20px;
    height: 20px;
  }
`;

const SearchButton = (props: PropsWithChildren<any>) => {
  return (
    <SearchButtonA {...props}>
      <BsSearch className="Search__Button__Icon" />
    </SearchButtonA>
  );
};

export default SearchButton;
