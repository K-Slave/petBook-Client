import usePagination from "./usePagination";
import { PaginationButton, PaginationDiv } from "./Pagination.styled";
import ChevronLeft from "../icons/ChevronLeft";
import ChevronRight from "../icons/ChevronRight";

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
          <ChevronLeft />
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
          <ChevronRight />
        </button>
      )}
    </PaginationDiv>
  );
};

export default Pagination;
