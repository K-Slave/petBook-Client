import type { PropsWithChildren } from "react";
import usePagination from "@lib/hooks/common/usePagination";
import { PaginationDiv } from "./style";
import { ChevronLeftRounded } from "../../Icon/ChevronLeft";
import { ChevronRightRounded } from "../../Icon/ChevronRight";
import Button, { type ButtonProps } from "../Button";
import Typography from "../Typography";

interface Props {
  totalPages: number;
  buttonCntPerLine: number;
  PageButton?: (props: PropsWithChildren<PageButtonProps>) => JSX.Element;
  PrevButton?: (props: PropsWithChildren<ButtonProps>) => JSX.Element;
  NextButton?: (props: PropsWithChildren<ButtonProps>) => JSX.Element;
}

type PageButtonProps = ButtonProps & {
  active: boolean;
  page: number;
};

const Pagination = ({ totalPages, buttonCntPerLine, ...props }: Props) => {
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

const DefaultPageButton = ({
  active,
  page,
  ...props
}: PropsWithChildren<PageButtonProps>) => (
  <Button {...props} width="2rem" height="2rem">
    <Typography
      tag="span"
      variant={active ? "body-small-bold" : "body-small-medium"}
      color={active ? "var(--black_01)" : "var(--black_05)"}
    >
      {page}
    </Typography>
  </Button>
);

const DefaultPrevButton = ({
  disabled,
  ...props
}: PropsWithChildren<ButtonProps>) => (
  <Button
    {...props}
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

const DefaultNextButton = ({
  disabled,
  ...props
}: PropsWithChildren<ButtonProps>) => (
  <Button
    {...props}
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
