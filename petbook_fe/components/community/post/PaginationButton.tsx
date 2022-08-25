import { useRef } from "react";
import styled, { css } from "styled-components";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useButtonOffset } from "./useButtonOffset";

interface PaginationProps {
  currentPage: number;
  changeCurrentPage: (page: number) => void;
  numPages: number;
}

const PaginationButton = ({
  currentPage,
  changeCurrentPage,
  numPages,
}: PaginationProps) => {
  const btnNum = useRef(10);
  const offset = useButtonOffset(btnNum.current, currentPage);
  const onClickPrev = () => {
    changeCurrentPage(offset - btnNum.current);
  };
  const onClickNext = () => {
    changeCurrentPage(offset + btnNum.current);
  };
  return (
    <Wrapper>
      {offset !== 1 && (
        <button onClick={onClickPrev}>
          <FiChevronLeft />
        </button>
      )}
      {Array(numPages + 1)
        .fill(1)
        .slice(offset, btnNum.current + offset + 1)
        .map((_, i) => (
          <Button
            key={i + offset}
            onClick={() => changeCurrentPage(i + offset)}
            selected={currentPage === offset + i ? true : false}
          >
            {i + offset}
          </Button>
        ))}
      {btnNum.current + offset < numPages && (
        <button onClick={onClickNext}>
          <FiChevronRight />
        </button>
      )}
    </Wrapper>
  );
};

export default PaginationButton;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 53px;
`;

const selectedStyle = css`
  background-color: #000;
  color: #fff;
  font-weight: 700;
  border-radius: 50%;
`;

const Button = styled.button<{ selected: boolean }>`
  ${({ selected }) => selected && selectedStyle};
  width: 22px;
  height: 22px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
