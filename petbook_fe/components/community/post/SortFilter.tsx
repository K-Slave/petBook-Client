import { BiSortAlt2 } from "react-icons/bi";
import styled from "styled-components";

const SortFilter = () => {
  return (
    <Wrapper>
      <p>최근순</p>
      <button>
        <BiSortAlt2 />
      </button>
    </Wrapper>
  );
};

export default SortFilter;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  p,
  button {
    font-size: 20px;
  }
  button {
    display: flex;
    align-items: center;
  }
`;
