import type { MouseEventHandler, PropsWithChildren } from "react";
import usePagination from "@lib/hooks/common/usePagination";
import { PaginationDiv } from "./style";
import { ChevronLeftRounded } from "../../Icon/ChevronLeft";
import { ChevronRightRounded } from "../../Icon/ChevronRight";
import Button from "../Button";

interface PageButtonProps {
  onClick: MouseEventHandler;
  active: boolean;
  page: number;
}

interface DirectionButtonProps {
  onClick: MouseEventHandler;
  disabled: boolean;
}

interface PaginationProps {
  totalPages: number;
  buttonCntPerLine: number;
  PageButton?: (props: PropsWithChildren<PageButtonProps>) => JSX.Element;
  PrevButton?: (props: PropsWithChildren<DirectionButtonProps>) => JSX.Element;
  NextButton?: (props: PropsWithChildren<DirectionButtonProps>) => JSX.Element;
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
  const PrevButton = props?.PrevButton || DefaultPrevButton;
  const NextButton = props?.NextButton || DefaultNextButton;
  return (
    <PaginationDiv>
      <PrevButton disabled={prevButtonDisabled} onClick={onClickPrevButton} />
      {shownButtons.map((_, i) => (
        <PageButton
          key={i}
          onClick={() => onClickPageButton(getPageNum(i))}
          active={IspageButtonActive(getPageNum(i))}
          page={getPageNum(i)}
        />
      ))}
      <NextButton disabled={nextButtonDisabled} onClick={onClickNextButton} />
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

const DefaultPrevButton = ({ disabled, onClick }: DirectionButtonProps) => (
  <Button
    onClick={onClick}
    width="1.5rem"
    height="1.5rem"
    hidden={disabled}
    style={{
      marginRight: "0.625rem",
    }}
  >
    <ChevronLeftRounded />
  </Button>
);

const DefaultNextButton = ({ disabled, onClick }: DirectionButtonProps) => (
  <Button
    onClick={onClick}
    width="1.5rem"
    height="1.5rem"
    hidden={disabled}
    style={{
      marginLeft: "0.625rem",
    }}
  >
    <ChevronRightRounded />
  </Button>
);

Pagination.defaultProps = {
  PageButton: DefaultPageButton,
  PrevButton: DefaultPrevButton,
  NextButton: DefaultNextButton,
};
export default Pagination;
