import { PropsWithChildren } from "react";
import { BsSearch } from "react-icons/bs";
import styled from "styled-components";

const SearchButtonA = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  width: 32px;
  height: 32px;

  .Search__Button__Icon {
    width: 20px;
    height: 20px;
  }
`;

const SearchButton = (props: PropsWithChildren<{}>) => {
  return (
    <SearchButtonA {...props}>
      <BsSearch className='Search__Button__Icon' />
    </SearchButtonA>
  );
};

export default SearchButton;
