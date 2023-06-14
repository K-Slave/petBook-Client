import usePagination from "@lib/hooks/common/usePagination";
import { PaginationButton, PaginationDiv } from "./style";
import { ChevronLeftRounded } from "../../Icon/ChevronLeft";
import { ChevronRightRounded } from "../../Icon/ChevronRight";

interface Props {
  totalPages: number;
  buttonNum: number;
}

const Pagination = ({ totalPages, buttonNum }: Props) => {
  const { currentPage, changeCurrentPage, offset } = usePagination({
    totalPages,
    buttonNum,
  });
  const onClickPrevButton = () => {
    changeCurrentPage(offset - buttonNum);
  };
  const onClickNextButton = () => {
    changeCurrentPage(offset + buttonNum);
  };
  const onClickPageButton = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const { textContent } = e.currentTarget;
    changeCurrentPage(Number(textContent));
  };
  return (
    <PaginationDiv>
      {offset !== 1 && (
        <button onClick={onClickPrevButton} type="button">
          <ChevronLeftRounded />
        </button>
      )}
      {Array(totalPages + 1)
        .fill(1)
        .slice(offset, buttonNum + offset)
        .map((_, i) => (
          <PaginationButton
            type="button"
            key={i}
            onClick={onClickPageButton}
            selected={currentPage === offset + i}
          >
            {i + offset}
          </PaginationButton>
        ))}
      {buttonNum + offset <= totalPages && (
        <button onClick={onClickNextButton} type="button">
          <ChevronRightRounded />
        </button>
      )}
    </PaginationDiv>
  );
};

export default Pagination;
