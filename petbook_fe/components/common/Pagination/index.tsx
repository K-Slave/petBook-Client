import getRandomKey from "@lib/utils/getRandomKey";
import usePagination from "./usePagination";
import { PaginationButton, PaginationDiv } from "./styled";
import ChevronLeft from "../icon/ChevronLeft";
import ChevronRight from "../icon/ChevronRight";

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
            key={getRandomKey()}
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
