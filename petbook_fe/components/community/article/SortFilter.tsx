import { BiSortAlt2 } from "react-icons/bi";
import styled from "styled-components";

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

const SortFilter = () => {
  return (
    <Wrapper>
      <p>실시간</p>
      <button type="button">
        <BiSortAlt2 />
      </button>
    </Wrapper>
  );
};

export default SortFilter;
