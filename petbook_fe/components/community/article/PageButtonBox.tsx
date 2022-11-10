import { useRef } from "react";
import styled, { css } from "styled-components";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import useButtonOffset from "@lib/hooks/useButtonOffset";
import usePagination from "@lib/hooks/usePagination";
import getRandomKey from "@lib/utils/getRandomKey";

const PageButtonBox = () => {
  const numPages = useRef(10);
  const btnNum = useRef(10);
  const { currentPage, changeCurrentPage } = usePagination(numPages.current);
  const offset = useButtonOffset({ btnNum: btnNum.current, currentPage });
  const onClickPrev = () => {
    changeCurrentPage(offset - btnNum.current);
  };
  const onClickNext = () => {
    changeCurrentPage(offset + btnNum.current);
  };
  return (
    <PageButtonBoxDiv>
      {offset !== 1 && (
        <button onClick={onClickPrev} type="button">
          <FiChevronLeft />
        </button>
      )}
      {Array(numPages.current + 1)
        .fill(1)
        .slice(offset, btnNum.current + offset)
        .map((_, i) => (
          <PageButton
            key={getRandomKey()}
            onClick={() => changeCurrentPage(i + offset)}
            selected={currentPage === offset + i}
          >
            {i + offset}
          </PageButton>
        ))}
      {btnNum.current + offset < numPages.current && (
        <button onClick={onClickNext} type="button">
          <FiChevronRight />
        </button>
      )}
    </PageButtonBoxDiv>
  );
};

const PageButtonBoxDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  margin-top: 53px;
`;

const selectedStyle = css`
  border-radius: 50%;
  background-color: #000;
  font-weight: 700;
  color: #fff;
`;

const PageButton = styled.button<{ selected: boolean }>`
  ${({ selected }) => selected && selectedStyle};
  display: flex;
  justify-content: center;
  align-items: center;

  width: 22px;
  height: 22px;

  font-size: 16px;
`;

export default PageButtonBox;
