import React from "react";
import type { MouseEventHandler, PropsWithChildren } from "react";
import usePagination from "@lib/hooks/common/usePagination";
import { ChevronLeftRounded } from "../../Icon/ChevronLeft";
import { ChevronRightRounded } from "../../Icon/ChevronRight";
import Button from "../Button";
import { PaginationDiv } from "./style";

interface PageButtonProps {
  onClick: MouseEventHandler;
  active: boolean;
  page: number;
}

interface DirectionButtonProps {
  onClick: MouseEventHandler;
  disabled: boolean;
  prevOrNext: "prev" | "next";
}

interface PaginationProps {
  totalPages: number;
  buttonCntPerLine: number;
  PageButton?: (props: PropsWithChildren<PageButtonProps>) => JSX.Element;
  DirectionButton?: (
    props: PropsWithChildren<DirectionButtonProps>
  ) => JSX.Element;
}

const Pagination = ({
  totalPages,
  buttonCntPerLine,
  ...props
}: PaginationProps) => {
  const { currentPage, changeCurrentPage, startPageNum } = usePagination({
    totalPages,
    buttonCntPerLine,
  });
  const shownButtons = Array(totalPages + 1)
    .fill(1)
    .slice(startPageNum, buttonCntPerLine + startPageNum);
  const prevButtonDisabled = startPageNum === 1;
  const nextButtonDisabled = buttonCntPerLine + startPageNum > totalPages;
  const IspageButtonActive = (page: number) => currentPage === page;
  const getPageNum = (index: number) => index + startPageNum;
  const onClickPrevButton = () => {
    changeCurrentPage(startPageNum - buttonCntPerLine);
  };
  const onClickNextButton = () => {
    changeCurrentPage(startPageNum + buttonCntPerLine);
  };
  const onClickPageButton = (page: number) => {
    changeCurrentPage(page);
  };
  const PageButton = props?.PageButton || DefaultPageButton;
  const DirectionButton = props?.DirectionButton || DefaultDirectionButton;
  return (
    <PaginationDiv>
      <DirectionButton
        disabled={prevButtonDisabled}
        onClick={onClickPrevButton}
        prevOrNext="prev"
      />
      {shownButtons.map((_, i) => (
        <PageButton
          key={i}
          onClick={() => onClickPageButton(getPageNum(i))}
          active={IspageButtonActive(getPageNum(i))}
          page={getPageNum(i)}
        />
      ))}
      <DirectionButton
        disabled={nextButtonDisabled}
        onClick={onClickNextButton}
        prevOrNext="next"
      />
    </PaginationDiv>
  );
};

const DefaultPageButton = ({ active, page, onClick }: PageButtonProps) => (
  <Button
    onClick={onClick}
    width="2rem"
    height="2rem"
    color={active ? "var(--black_01)" : "var(--black_05)"}
    typography={active ? "body-small-bold" : "body-small-medium"}
  >
    {page}
  </Button>
);

const DefaultDirectionButton = ({
  disabled,
  onClick,
  prevOrNext,
}: DirectionButtonProps) => (
  <Button
    onClick={onClick}
    width="1.5rem"
    height="1.5rem"
    hidden={disabled}
    style={{
      marginRight: "0.625rem",
    }}
  >
    {prevOrNext === "prev" ? <ChevronLeftRounded /> : <ChevronRightRounded />}
  </Button>
);

Pagination.defaultProps = {
  PageButton: DefaultPageButton,
  DirectionButton: DefaultDirectionButton,
};
export default Pagination;
