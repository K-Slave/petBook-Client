import type { PropsWithChildren, MouseEventHandler } from "react";
import usePagination from "@lib/hooks/common/usePagination";
import { StyledPageButton, PaginationDiv } from "./style";
import { ChevronLeftRounded } from "../../Icon/ChevronLeft";
import { ChevronRightRounded } from "../../Icon/ChevronRight";
import Button from "../Button";
import Typography from "../Typography";

interface Props {
  totalPages: number;
  buttonCntPerLine: number;
  PageButton?: typeof DefaultPageButton;
}

const Pagination = ({ totalPages, buttonCntPerLine, PageButton }: Props) => {
  const { currentPage, changeCurrentPage, startPageNum } = usePagination({
    totalPages,
    buttonCntPerLine,
  });
  const shownButtons = Array(totalPages + 1)
    .fill(1)
    .slice(startPageNum, buttonCntPerLine + startPageNum);
  const prevButtonDisbabled = startPageNum === 1;
  const nextButtonDisabled = buttonCntPerLine + startPageNum > totalPages;
  const IspageButtonActive = (page: number) => currentPage === page;
  const getPageNum = (index: number) => index + startPageNum;
  const onClickPrevButton = () => {
    changeCurrentPage(startPageNum - buttonCntPerLine);
  };
  const onClickNextButton = () => {
    changeCurrentPage(startPageNum + buttonCntPerLine);
  };
  const onClickPageButton = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const { textContent } = e.currentTarget;
    changeCurrentPage(Number(textContent));
  };
  return (
    <PaginationDiv>
      <Button
        hidden={prevButtonDisbabled}
        onClick={onClickPrevButton}
        width="1.5rem"
        height="1.5rem"
        style={{
          padding: "0",
          marginRight: "0.625rem",
        }}
      >
        <ChevronLeftRounded />
      </Button>
      {shownButtons.map((_, i) =>
        PageButton ? (
          <PageButton
            key={i}
            onClick={onClickPageButton}
            active={IspageButtonActive(getPageNum(i))}
            page={getPageNum(i)}
          />
        ) : (
          <DefaultPageButton
            key={i}
            onClick={onClickPageButton}
            active={IspageButtonActive(getPageNum(i))}
            page={getPageNum(i)}
          />
        )
      )}
      <Button
        hidden={nextButtonDisabled}
        onClick={onClickNextButton}
        width="1.5rem"
        height="1.5rem"
        style={{
          padding: "0",
          marginLeft: "0.625rem",
        }}
      >
        <ChevronRightRounded />
      </Button>
    </PaginationDiv>
  );
};

interface PageButtonProps {
  onClick?: MouseEventHandler;
  active: boolean;
  page: number;
  style?: React.CSSProperties;
}

const DefaultPageButton = ({
  onClick,
  active,
  page,
}: PropsWithChildren<PageButtonProps>) => {
  return (
    <StyledPageButton onClick={onClick}>
      <Typography
        tag="span"
        variant={active ? "body-small-bold" : "body-small-medium"}
        color={active ? "var(--black_01)" : "var(--black_05)"}
      >
        {page}
      </Typography>
    </StyledPageButton>
  );
};

Pagination.DefaultPageButton = DefaultPageButton;
Pagination.defaultProps = {
  PageButton: DefaultPageButton,
};
export default Pagination;
